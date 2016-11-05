# this test script assumes that 'JavaScript-Runtime' files have been copied into 'JavaScript-Code'
#echo "Testing runtime internals..."
#nodeunit JavaScript-Core/src/test/prompto/runtime/context/
#nodeunit JavaScript-Core/src/test/prompto/parser/e/
#nodeunit JavaScript-Core/src/test/prompto/parser/o/
#echo "Testing runtime with E dialect..."
#nodeunit JavaScript-Core/src/test/prompto/runtime/e/
#echo "Testing runtime with O dialect..."
#nodeunit JavaScript-Core/src/test/prompto/runtime/o/
#echo "Testing translations E -> O -> E ..."
#nodeunit JavaScript-Core/src/test/prompto/translate/eoe/
#echo "Testing translations E -> S -> E ..."
#nodeunit JavaScript-Core/src/test/prompto/translate/ese/
#echo "Testing translations O -> E -> O ..."
#nodeunit JavaScript-Core/src/test/prompto/translate/oeo/
#echo "Testing translations O -> S -> O ..."
#nodeunit JavaScript-Core/src/test/prompto/translate/oso/
#echo "Testing framework libraries ..."
#nodeunit JavaScript-Core/src/test/internet/
#nodeunit JavaScript-Core/src/test/library/e/
nodeunit JavaScript-Core/src/test/library/reader/

# to debug a failing test:
# place a 'debugger' instruction where you want to break
# run something like the below in a shell
# cd JavaScript-Core/src/test/prompto/runtime/e/
# node --debug-brk `which nodeunit` TestNative.js (or whatever)
# in another shell, run: node-inspector
# point a browser to http://127.0.0.1:8080/?port=5858
