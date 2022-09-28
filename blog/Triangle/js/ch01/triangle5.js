"use strict";

var gl;
var points;

window.onload = function init(){
	var canvas = document.getElementById( "triangle-canvas" );
	gl = WebGLUtils.setupWebGL( canvas );
	if( !gl ){
		alert( "WebGL isn't available" );
	}

	// Three Vertices
	var vertices = [
		-1.0, -1.0, 
		 1.0, -1.0, 
		 0.0,  1.0, 
		 /*0.0, -1.0,
		 1.0, -1.0,
		 1.0,  1.0,
		 0.0, -1.0,
		 1.0,  1.0,
		 0.0,  1.0*/
		 /*-0.5, -0.5,
		 0.0, 0.5,
		 0.5, -0.5*/
	];

	var vertcolor = [
		1.0, 0.0, 0.0,
		0.0, 1.0, 0.0,
		0.0, 0.0, 1.0
	];
	// Configure WebGL
	gl.viewport( 0, 0, canvas.width, canvas.height );
	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

	// Load shaders and initialize attribute buffers
	var program = initShaders( gl, "vertex-shader", "fragment-shader" );
	gl.useProgram( program );

	// Load the data into the GPU
	var bufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

	// Associate external shader variables with data buffer
	var cPosition = gl.getAttribLocation( program, "cPosition" );
	gl.vertexAttribPointer( cPosition, 2, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( cPosition );

	var cbufferId = gl.createBuffer();
	gl.bindBuffer( gl.ARRAY_BUFFER, cbufferId );
	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertcolor ), gl.STATIC_DRAW );

	var cColor = gl.getAttribLocation( program, "cColor" );
	gl.vertexAttribPointer( cColor, 3, gl.FLOAT, false, 0, 0 );
	gl.enableVertexAttribArray( cColor );

	render();
}

function render(){
	gl.clear( gl.COLOR_BUFFER_BIT );
	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
	gl.drawArrays( gl.TRIANGLES, 0, 3 );
	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}




// "use strict";

// var gl;
// var points;

// window.onload = function init(){
// 	var canvas = document.getElementById( "triangle-canvas" );
// 	gl = WebGLUtils.setupWebGL( canvas );
// 	if( !gl ){
// 		alert( "WebGL isn't available" );
// 	}

// 	// Three Vertices
// 	var vertices1 = [
// 		-1.0,1.0,
// 		-1.0,0.0,
// 		0.0,1.0,
// 		/*-1.0, 0.0, 
// 		0.0,  1.0, 
// 		1.0, 0.0, 
//         -1.0,0.0,
//         -1.0,-1.0,
//         1.0,-1.0,
//         1.0,-1.0,
//         -1.0,0.0,
//         1.0,0.0,*/
// 		/*0.0, -1.0,
// 		 1.0, -1.0,
// 		 1.0,  1.0,
// 		 0.0, -1.0,
// 		 1.0,  1.0,
// 		 0.0,  1.0*/
// 		 /*-0.5, -0.5,
// 		 0.0, 0.5,
// 		 0.5, -0.5*/
// 	];
// 	var vertices2 = [
// 		/*-1.0,1.0,
// 		-1.0,0.0,
// 		0.0,1.0,*/
// 		0.0,0.0,
// 		0.0,-1.0,
// 		1.0,-1.0,
// 		1.0,0.0,
// 		0.0,0.0,
// 		1.0,-1.0,
// 		/*-1.0, 0.0, 
// 		0.0,  1.0, 
// 		1.0, 0.0, 
//         -1.0,0.0,
//         -1.0,-1.0,
//         1.0,-1.0,
//         1.0,-1.0,
//         -1.0,0.0,
//         1.0,0.0,*/
// 		/*0.0, -1.0,
// 		 1.0, -1.0,
// 		 1.0,  1.0,
// 		 0.0, -1.0,
// 		 1.0,  1.0,
// 		 0.0,  1.0*/
// 		 /*-0.5, -0.5,
// 		 0.0, 0.5,
// 		 0.5, -0.5*/
// 	];
// 	// Configure WebGL
// 	gl.viewport( 0, 0, canvas.width, canvas.height );
// 	gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

// 	// Load shaders and initialize attribute buffers
// 	var program1 = initShaders( gl, "vertex-shader", "fragment1-shader" );
// 	gl.useProgram( program1 );

// 	// Load the data into the GPU
// 	var bufferId1 = gl.createBuffer();
// 	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId1 );
// 	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices1 ), gl.STATIC_DRAW );

// 	// Associate external shader variables with data buffer
// 	var vPosition1 = gl.getAttribLocation( program1, "vPosition" );
// 	gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
// 	gl.enableVertexAttribArray( vPosition1 );
// 	render1();

//     var program2 = initShaders( gl, "vertex-shader", "fragment2-shader" );
// 	gl.useProgram( program2 );

// 	// Load the data into the GPU
// 	var bufferId2 = gl.createBuffer();
// 	gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
// 	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices2 ), gl.STATIC_DRAW );

// 	// Associate external shader variables with data buffer
// 	var vPosition2 = gl.getAttribLocation( program2, "vPosition" );
// 	gl.vertexAttribPointer( vPosition2, 2, gl.FLOAT, false, 0, 0 );
// 	gl.enableVertexAttribArray( vPosition2 );


// 	render2();
// }

// function render1(){
// 	gl.clear( gl.COLOR_BUFFER_BIT );
// 	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
// 	gl.drawArrays( gl.TRIANGLES, 0, 3 );
// 	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
// }
// function render2(){
// 	//gl.clear( gl.COLOR_BUFFER_BIT );
// 	//gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
// 	gl.drawArrays(gl.TRIANGLES, 0, 6);
// 	//gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
// }
