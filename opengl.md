#OPENGL 环境设置
## 建立基本编译环境
首先不可或缺的，就是编译器与基本的函数库，如果系统没有安装的话，执行下面的语句。
```shell
sudo apt-get install build-essential
```
## 安装OpenGL Library
接下来安装我们会用到的Library装上去，首先安装OpenGL Library
```shell
sudo apt-get install libgl1-mesa-dev
```
## 安装OpenGL Utilities
OpenGL Utilities是一组构建在OpenGL Library之上的工具组，提供许多方便的函数，使OpenGL更强大更容易使用。
```shell
sudo apt-get install libglu1-mesa-dev
```
## 安装OpenGL Utility Toolkit
OpenGL Utility Toolkit是建立在OpenGL Utilities上面的工具箱，除了强化OpenGL Utilities的不足之外，也增加了对用户界面的支持。
```shell
sudo apt-get install libglut-dev
```
一个HelloWorld程序:
```c
#include <GL/glut.h>

void init();
void display();

int main(int argc, char* argv[])
{
	glutInit(&argc, argv);
	glutInitDisplayMode(GLUT_RGB | GLUT_SINGLE);
	glutInitWindowPosition(0, 0);
	glutInitWindowSize(300, 300);
	
	glutCreateWindow("OpenGL 3D View");
	
	init();
	glutDisplayFunc(display);
	
	glutMainLoop();
	return 0;
}

void init()
{
	glClearColor(0.0, 0.0, 0.0, 0.0);
	glMatrixMode(GL_PROJECTION);
	glOrtho(-5, 5, -5, 5, 5, 15);
	glMatrixMode(GL_MODELVIEW);
	gluLookAt(0, 0, 10, 0, 0, 0, 0, 1, 0);
}

void display()
{
	glClear(GL_COLOR_BUFFER_BIT);
		
	glColor3f(1.0, 0, 0);
	glutWireTeapot(3);
	
	glFlush();
}
```
执行下面语句编译程序.
```shell
gcc example.c -o example -lGL -lGLU -lglut
```
因为我们安装了OpenGL Utility Toolkit，它是建立在OpenGL Utilities和OpenGL Library之上的。所以我们也可以执行下面的语句来编译程序。
```shell
gcc example.c -o example -lglut
```
## 执行程序
```shell
./example
```
