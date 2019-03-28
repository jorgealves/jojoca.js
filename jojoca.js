var Jojoca = function() {};

Jojoca.prototype.execute = function(){
	console.log("See? I don't fail!");
	return arguments;
}

/* 
 * Returns a modified version of the original function that, if it ends up throwing an error, returns a console.log instead! 
 * 
 * @param {function} originalFunction the original function to be wrapped
 * @returns function a modified version of the function provided in the parameters
 * 
 * @example
 * function runAndSum(func, a, b) {
 *  console.log(a+b);
    func()
 * }
 * 
 * let aJojoca = new Jojoca();
 * let jw = aJojoca.getWrappedFunction(runAndSum);
 * 
 * // works
 * runAndSum(function(){console.log('yeah')}, 1, 2);
 * // works all the same
 * jw(function(){console.log('yeah')}, 1, 2);
 * // fails
 * // runAndSum(1, 1, 2);
 * // DOES NOT FAIL
 * jw(1, 1, 2);
 */
Jojoca.prototype.getWrappedFunction = function(originalFunction) {
    return function() {
        try {
            originalFunction.apply(this, arguments);
        } catch(e) {
            console.log(`aconteceu "${e}", mas Jojoca NÃO FALHA!`);
        }
    }
}
