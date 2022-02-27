DIST_NAME = texturepainter

SCRIPT_FILES = \
	src/index.ts \
	src/glsl.d.ts \
	src/demo.ts \
	test/test.ts

EXTRA_SCRIPTS = \
	src/TexturePainter_FragmentShader.glsl \
	src/TexturePainter_VertexShader.glsl

include ./Makefile.microproject
