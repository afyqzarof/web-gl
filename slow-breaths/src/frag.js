const frag = `
precision mediump float;

uniform float u_time;

uniform sampler2D cat;
uniform sampler2D displacement;

varying vec4 v_position;
varying vec3 v_normal;
varying vec2 v_texcoord;

vec4 rgb(float r, float g, float b){
    return vec4(r / 255.0, g / 255.0, b / 255.0, 1.0);
}

void main(void)
{
    vec2 uv = v_texcoord;
    
    vec2 point = fract(uv * 0.2 + u_time * 0.1);
    
    vec4 dispColor = texture2D(displacement, point);
    
    vec4 tl = rgb(251.0, 41.0, 212.0);
    vec4 tr = rgb(0.0, 255.0, 224.0);
    vec4 bl = rgb(250.0, 255.0, 0.0);
    vec4 br = rgb(231.0, 244.0, 255.0);
    
    float dispX = dispColor.r;
    float dispY = dispColor.r;
    
    vec4 top = mix(tl, tr, uv.x + dispX);
    vec4 bottom = mix(bl, br, uv.x - dispX);
    
    vec4 color = mix(top, bottom, uv.y + dispY);
    
    gl_FragColor = color;
}

`;
