// factorial.cc
// access v8 engine
#include <node.h>

// main algo
double factorial(double n){
	if(n == 0)
		return 1;
	return n * factorial(n - 1);
}

void factorial(const v8::FunctionCallbackInfo<v8::Value>& info){
	// get first argument with double precision
	double n = info[0]->NumberValue();

	// calculate result
	double result = factorial(n);

	// create a new number containing the result
	v8::Local<v8::Number> Result = v8::Number::New(info.GetIsolate(), result);

	// return result
	info
		.GetReturnValue()
		.Set(Result);
}

// addone initialization
void Init(v8::Local<v8::Object> exports){
	NODE_SET_METHOD(exports, "factorial", factorial);
}

NODE_MODULE(addon, Init)