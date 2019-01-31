import React from 'react';
import './App.css';

const operators = '-+/*';

class Calculator extends React.Component {
	state = {
		output: '0'
	};

	// event handler to add input to the input in state
	handleNumbers = event => {
		const output = this.state.output.toString().slice();
		if (output === '0') this.setState({ output: event.target.value });
		else this.setState({ output: output + event.target.value });
	};

	// event handler to restrict starting with multiple zeros
	handleZero = () => {
		const output = this.state.output.slice();
		if (output === '0' && output.length === 1) return;
		else this.setState({ output: output + '0' });
	};

	// event handler to clear input
	handleClear = () => this.setState({ output: '0' });

	// event handler for operators
	handleOperators = event => {
		const { value } = event.target;
		const output = this.state.output.toString().slice();
		operators.includes(output.slice(-1))
			? this.setState({ output: output.slice(0, output.length - 1) + value })
			: this.setState({ output: output + value });
	};

	handleEquals = () => {
		try {
			const output = eval(this.state.output.toString().slice());
			this.setState({ output });
		} catch (e) {
			alert('Please try a correct expression');
			this.setState({ output: 0 });
		}
	};

	handleDecimal = event => {
		const output = this.state.output.slice();
		if (/[.]/.test(output.split(/[-+/*]/).slice(-1))) return;
		this.handleNumbers(event);
	};

	render() {
		return (
			<div className='App'>
				<div>
					<p id='display' className='output'>
						{this.state.output}
					</p>
				</div>
				<div>
					<div className='row'>
						<button id='seven' value='7' onClick={this.handleNumbers}>
							7
						</button>
						<button id='eight' value='8' onClick={this.handleNumbers}>
							8
						</button>
						<button id='nine' value='9' onClick={this.handleNumbers}>
							9
						</button>
						<button
							id='divide'
							value='/'
							className='operator'
							onClick={this.handleOperators}
						>
							/
						</button>
					</div>
					<div className='row'>
						<button id='four' value='4' onClick={this.handleNumbers}>
							4
						</button>
						<button id='five' value='5' onClick={this.handleNumbers}>
							5
						</button>
						<button id='six' value='6' onClick={this.handleNumbers}>
							6
						</button>
						<button
							id='multiply'
							value='*'
							className='operator'
							onClick={this.handleOperators}
						>
							*
						</button>
					</div>
					<div className='row'>
						<button id='one' value='1' onClick={this.handleNumbers}>
							1
						</button>
						<button id='two' value='2' onClick={this.handleNumbers}>
							2
						</button>
						<button id='three' value='3' onClick={this.handleNumbers}>
							3
						</button>
						<button
							id='add'
							value='+'
							className='operator'
							onClick={this.handleOperators}
						>
							+
						</button>
					</div>
					<div className='row'>
						<button id='decimal' value='.' onClick={this.handleDecimal}>
							.
						</button>
						<button id='zero' value='0' onClick={this.handleZero}>
							0
						</button>
						<button id='equals' value='=' onClick={this.handleEquals}>
							=
						</button>
						<button
							id='subtract'
							value='-'
							className='operator'
							onClick={this.handleOperators}
						>
							-
						</button>
					</div>
					<div className='row'>
						<button id='clear' value='clear' onClick={this.handleClear}>
							Clear
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Calculator;
