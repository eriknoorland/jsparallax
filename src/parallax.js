/* JSParallax main */

/**
 * ParallaxEngine - Constructor
 * @param view - View - The viewport of the parallax engine
 * @param focus - int - The focus, or focal point
 * @param behaviour - Behaviour [optional] - The behaviour of the parallax engine elements
 */
function JSParallax(view, focus, behaviour)
{
	_that = this;

	this._view = view;
	this._focus = focus;
	this._behaviour = behaviour || new Behaviour();
	this._state = State.PAUSE;
	this._elements = [];
	this._numElements = 0;
	this._rafId = 0;
	this._mX = 0;
	this._mY = 0;
	this._newX = 0;
	this._newY = 0;

	/**
	 * Handles the request animation frame event
	 * @return void
	 */
	this.update = function()
	{
		_that._rafId = requestAnimationFrame(_that.update);

		_that._mX = _that._behaviour.getTarget().getX();
		_that._mY = _that._behaviour.getTarget().getY();

		if((_that._mX < _that._view.getBoundLeft()
			|| _that._mX > _that._view.getBoundRight()
			|| _that._mY < _that._view.getBoundTop()
			|| _that._mY > _that._view.getBoundBottom())
			&& _that._behaviour.getOutOfBounds() != Behaviour.CONTINUE_TO_DESTINATION){
				if(_that._behaviour.getOutOfBounds() == Behaviour.STOP_MOVEMENT){
					return;
				}

				_that._mX = _that._view.getWidth() / 2;
				_that._mY = _that._view.getHeight() / 2;
		}
		else if(_that.mX < _that._view.getBoundLeft()
			&& _that._behaviour.getOutOfBounds() == Behaviour.CONTINUE_TO_DESTINATION){
				_that.mX = _that._view.getBoundLeft();
		}
		else if(_that._mX > _that._view.getBoundRight()
			&& _that._behaviour.getOutOfBounds() == Behaviour.CONTINUE_TO_DESTINATION){
				_that._mX = _that._view.getBoundRight();
		}
		else if(_that._mY < _that._view.getBoundTop()
			&& _that._behaviour.getOutOfBounds() == Behaviour.CONTINUE_TO_DESTINATION){
				_that._mY = _that._view.getBoundTop();
		}
		else if(_that._mY > _that._view.getBoundBottom()
			&& _that._behaviour.getOutOfBounds() == Behaviour.CONTINUE_TO_DESTINATION){
				_that._mY = _that._view.getBoundBottom();
		}
		
		for(var i = 0; i < _that._numElements; i++){
			var el = _that._elements[i].element;
			var elX = parseInt(el.style.left);
			var elY = parseInt(el.style.top);
			var d = _that._elements[i].depth;
			var p = _that._elements[i].position;

			if(_that._behaviour.getAxis() == Axis.X || _that._behaviour.getAxis() == Axis.BOTH){
				_that._newX = elX + (((((((document.documentElement.clientWidth / 2) - _that._mX) / _that._focus) * (_that._focus - d) * (_that._behaviour.getInvert() == Axis.X || _that._behaviour.getInvert() == Axis.BOTH ? -1 : 1)) + p.x) - elX) * _that._behaviour.getEase()) * (_that._view.getWidth() / document.documentElement.clientWidth);
				el.style.left = _that._newX + 'px';
			}

 			if(_that._behaviour.getAxis() == Axis.Y || _that._behaviour.getAxis() == Axis.BOTH){
 				_that._newY = elY + (((((((document.documentElement.clientHeight / 2) - _that._mY) / _that._focus) * (_that._focus - d) * (_that._behaviour.getInvert() == Axis.Y || _that._behaviour.getInvert() == Axis.BOTH ? -1 : 1)) + p.y) - elY) * _that._behaviour.getEase()) * (_that._view.getHeight() / document.documentElement.clientHeight);
 				el.style.top = _that._newY + 'px';
 			}
		}
	};

  return true;
}
		
/**
 * Sets the behaviour of the parallax engine elements
 * @param behaviour - Behaviour
 * @return void
 */
JSParallax.prototype.setBehaviour = function(behaviour)
{
	this._behaviour = behaviour;
}

/**
 * Sets the state of the parallax engine. Options are: 
 	 State.RUN or State.PAUSE. The default value is State.PAUSE
 * @param state - String
 * @return void
 */
JSParallax.prototype.setState = function(state)
{
	switch(state){
		case State.RUN:
			this._rafId = requestAnimationFrame(this.update);
			_state = state;
			break;
		case State.PAUSE:
			cancelAnimationFrame(this._rafId);
			_state = state;
			break;
	}
}

/**
 * Adds an element to the parallax engine
 * @param element - Element
 * @param depth - int
 * @return void
 */
JSParallax.prototype.addElement = function(element, depth)
{
	var rect = element.getBoundingClientRect();

	this._elements.push({
		element: element,
		position: {
			x: rect.left,
			y: rect.top
		},
		depth: depth
	});

	this._numElements = this._elements.length;
}

/**
 * Removes an element from the parallax engine
 * @param Element - element
 * @return void
 */
JSParallax.prototype.removeElement = function(element)
{
	for(var i = 0; i < _numElements; i++){
		if(_elements[i].element == element){
			_elements.splice(i, 1);
			break;
		}
	}
	_numElements = _elements.length;
}

// Version.
JSParallax.VERSION = '0.1.0';


// Export to the root, which is probably `window`.
root.JSParallax = JSParallax;
