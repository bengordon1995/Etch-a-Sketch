	const container = document.querySelector('#root')

	const makeGrid = (rows, cols) => {
		while(container.firstChild){
			container.removeChild(container.firstChild);
		}
		container.className = 'grid-container'
		container.style.gridTemplateColumns = " auto".repeat(rows)
		for (let i = 0; i < rows; i++){
			for (let j = 0; j < cols; j++){
				let tempItemDiv = document.createElement('div')
				tempItemDiv.className = 'grid-item'
				tempItemDiv.addEventListener('mouseenter', function(event){
					event.target.style.backgroundColor = 'black'
				})
				container.appendChild(tempItemDiv)
			}
		}
	}

	const resetGrid = () => {
		let prompt = window.prompt("new grid size?")

		if (prompt != null){
			console.log(prompt)
			if (!isNaN(prompt)){
				makeGrid(prompt, prompt)
			}
		}
	}

	makeGrid(16,16)