for /r %%i in (*.b* ) do (
	echo rename "%%i" "%%~ni".b1 >> test.cmd
)
test.cmd
