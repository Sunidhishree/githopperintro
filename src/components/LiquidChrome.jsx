import { useRef, useEffect } from "react";
import { Renderer, Program, Mesh, Triangle } from "ogl";
import "./LiquidChrome.css";

export const LiquidChrome = ({
    baseColor = [0.03, 0.035, 0.03],
    speed = 0.52,
    amplitude = 0.17,
    frequencyX = 2.6,
    frequencyY = 2.4,
    interactive = true,
    ...props
}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const renderer = new Renderer({ antialias: true, alpha: true });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 1);

        const vertexShader = `
      attribute vec2 position;
      attribute vec2 uv;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        const fragmentShader = `
      precision highp float;
      uniform float uTime;
      uniform vec3 uResolution;
      uniform vec3 uBaseColor;
      uniform float uAmplitude;
      uniform float uFrequencyX;
      uniform float uFrequencyY;
      uniform vec2 uMouse;
      varying vec2 vUv;

      vec4 renderImage(vec2 uvCoord) {
        vec2 fragCoord = uvCoord * uResolution.xy;
        vec2 uv = (2.0 * fragCoord - uResolution.xy) / min(uResolution.x, uResolution.y);
                uv.y -= uTime * 0.08;

        for (float i = 1.0; i < 9.0; i++) {
          uv.x += uAmplitude / i * cos(i * uFrequencyX * uv.y + uTime + uMouse.x * 3.14159);
          uv.y += uAmplitude / i * cos(i * uFrequencyY * uv.x + uTime + uMouse.y * 3.14159);
        }

        vec2 diff = (uvCoord - uMouse);
        float dist = length(diff);
        float falloff = exp(-dist * 24.0);
        float ripple = sin(8.0 * dist - uTime * 1.6) * 0.01;
        uv += (diff / (dist + 0.0001)) * ripple * falloff;

                float plasma = abs(sin(uTime * 0.9 - uv.y - uv.x));
                float rise = 1.0 - smoothstep(0.6, 1.0, uvCoord.y);
                vec3 color = (uBaseColor / max(plasma, 0.18)) * (0.82 + 0.42 * rise);
        return vec4(color, 1.0);
      }

      void main() {
        vec4 col = vec4(0.0);
        int samples = 0;
        for (int i = -1; i <= 1; i++) {
          for (int j = -1; j <= 1; j++) {
            vec2 offset = vec2(float(i), float(j)) * (1.0 / min(uResolution.x, uResolution.y));
            col += renderImage(vUv + offset);
            samples++;
          }
        }
        gl_FragColor = col / float(samples);
      }
    `;

        const geometry = new Triangle(gl);
        const program = new Program(gl, {
            vertex: vertexShader,
            fragment: fragmentShader,
            uniforms: {
                uTime: { value: 0 },
                uResolution: {
                    value: new Float32Array([
                        gl.canvas.width,
                        gl.canvas.height,
                        gl.canvas.width / gl.canvas.height,
                    ]),
                },
                uBaseColor: { value: new Float32Array(baseColor) },
                uAmplitude: { value: amplitude },
                uFrequencyX: { value: frequencyX },
                uFrequencyY: { value: frequencyY },
                uMouse: { value: new Float32Array([0.5, 0.5]) },
            },
        });

        const mesh = new Mesh(gl, { geometry, program });

        function resize() {
            renderer.setSize(container.offsetWidth, container.offsetHeight);
            const resUniform = program.uniforms.uResolution.value;
            resUniform[0] = gl.canvas.width;
            resUniform[1] = gl.canvas.height;
            resUniform[2] = gl.canvas.width / gl.canvas.height;
        }

        const targetMouse = { x: 0.5, y: 0.5 };

        function updatePointer(clientX, clientY) {
            const rect = container.getBoundingClientRect();
            targetMouse.x = (clientX - rect.left) / rect.width;
            targetMouse.y = 1 - (clientY - rect.top) / rect.height;
        }

        function handleMouseMove(event) {
            updatePointer(event.clientX, event.clientY);
        }

        function handleTouchStart(event) {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                updatePointer(touch.clientX, touch.clientY);
            }
        }

        function handleTouchMove(event) {
            if (event.touches.length > 0) {
                const touch = event.touches[0];
                updatePointer(touch.clientX, touch.clientY);
            }
        }

        window.addEventListener("resize", resize);
        resize();

        if (interactive) {
            container.addEventListener("mousemove", handleMouseMove);
            container.addEventListener("touchstart", handleTouchStart, {
                passive: true,
            });
            container.addEventListener("touchmove", handleTouchMove);
        }

        let animationId;
        function update(t) {
            animationId = requestAnimationFrame(update);
            program.uniforms.uTime.value = t * 0.001 * speed;
            const mouseUniform = program.uniforms.uMouse.value;
            mouseUniform[0] += (targetMouse.x - mouseUniform[0]) * 0.12;
            mouseUniform[1] += (targetMouse.y - mouseUniform[1]) * 0.12;
            renderer.render({ scene: mesh });
        }

        animationId = requestAnimationFrame(update);
        container.appendChild(gl.canvas);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener("resize", resize);
            if (interactive) {
                container.removeEventListener("mousemove", handleMouseMove);
                container.removeEventListener("touchstart", handleTouchStart);
                container.removeEventListener("touchmove", handleTouchMove);
            }
            if (gl.canvas.parentElement) {
                gl.canvas.parentElement.removeChild(gl.canvas);
            }
            gl.getExtension("WEBGL_lose_context")?.loseContext();
        };
    }, [baseColor, speed, amplitude, frequencyX, frequencyY, interactive]);

    return <div ref={containerRef} className="liquidChrome-container" {...props} />;
};

export default LiquidChrome;
