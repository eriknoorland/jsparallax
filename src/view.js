/**
 * View - Constructor
 * @param rectangle - Object {x, y, width, height}
 * @param Number [optional]
 * @param Number [optional]
 * @param Number [optional]
 * @param Number [optional]
 */
function View(rectangle, boundTop, boundRight, boundBottom, boundLeft)
{
	var _x = rectangle.x,
			_y = rectangle.y,
			_width = rectangle.width,
			_height = rectangle.height,
			_boundTop = boundTop || _y,
			_boundRight = boundRight || _x + _width,
			_boundBottom = boundBottom || _y + _height,
			_boundLeft = boundLeft || _x;

	this.x = function(){
		return _x;
	}

	this.y = function(){
		return _y;
	}

	this.width = function(){
		return _width;
	}

	this.height = function(){
		return _height;
	}

	this.getBoundTop = function()
	{
		return _boundTop;
	}

	this.getBoundRight = function()
	{
		return _boundRight;
	}

	this.getBoundBottom = function()
	{
		return _boundBottom;
	}

	this.getBoundLeft = function()
	{
		return _boundLeft;
	}
}

/**
 * Returns the x position
 * @return int
 */
View.prototype.getX = function()
{
	return this.x();
};

/**
 * Returns the y position
 * @return int
 */
View.prototype.getY = function()
{
	return this.y();
};

/**
 * Returns the width
 * @return int
 */
View.prototype.getWidth = function()
{
	return this.width();
};

/**
 * Returns the height
 * @return int
 */
View.prototype.getHeight = function()
{
	return this.height();
};

/**
 * Returns the top bound
 * @return Number
 */
View.prototype.getBoundTop = function()
{
	return this.boundTop();
}

/**
 * Return the right bound
 * @return Number
 */
View.prototype.getBoundRight = function()
{
	return this.boundRight();
}

/**
 * Returns the bottom bound
 * @return Number
 */
View.prototype.getBoundBottom = function()
{
	return this.boundBottom();
}

/**
 * Returns the left bound
 * @return Number
 */
View.prototype.getBoundLeft = function()
{
	return this.boundLeft();
}