/**
 * MousePointer - Constructor
 */
function MousePointer(){
	var _x;
	var _y;

	document.addEventListener('mousemove', function(event){
    _x = event.clientX || event.pageX;
    _y = event.clientY || event.pageY
	}, false);

	this.x = function(){
		return _x;
	}
	
	this.y = function(){
		return _y;
	}
}

/**
 * Returns the x position
 * @return int
 */
MousePointer.prototype.getX = function()
{
	return this.x();
}

/**
 * Returns the y position
 * @return int
 */
MousePointer.prototype.getY = function()
{
	return this.y();
}