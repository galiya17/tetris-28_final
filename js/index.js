/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes */ \"./src/ts/shapes.ts\");\n\n// === Объявление функций ===\n// Функция для отрисовки игрового поля\nfunction drawTetrisPlayground(x, y, target) {\n    if (x <= 0 || y <= 0)\n        throw new Error('x and y cannot be negative');\n    if (target.children.length)\n        throw new Error('Aborted: target element should be empty');\n    for (let rowsCount = 0; rowsCount < y; rowsCount++) {\n        const row = document.createElement('div');\n        row.className = 'row';\n        row.dataset['row'] = rowsCount.toString();\n        for (let cellsCount = 0; cellsCount < x; cellsCount++) {\n            const cell = document.createElement('div');\n            cell.className = 'cell';\n            cell.dataset['cell'] = cellsCount.toString();\n            row.append(cell);\n        }\n        target.append(row);\n    }\n}\n// Функция для отображения зафиксированных блоков на игровом поле\nfunction renderFixedBlocks() {\n    var _a;\n    for (let row = 0; row < playground.length; row++) {\n        for (let col = 0; col < playground[row].length; col++) {\n            const cell = (_a = tetrisPlaygroundTarget === null || tetrisPlaygroundTarget === void 0 ? void 0 : tetrisPlaygroundTarget.children[row]) === null || _a === void 0 ? void 0 : _a.children[col];\n            if (!cell)\n                continue;\n            // Если блок зафиксирован, отобразим его цвет, иначе очистим ячейку\n            if (playground[row][col]) {\n                cell.style.backgroundColor = 'grey';\n            }\n            else {\n                cell.style.backgroundColor = '';\n            }\n        }\n    }\n}\n// Функция для отображения движущейся фигуры на игровом поле\nfunction renderShape() {\n    var _a;\n    const rowsToColor = currentShape.shape.length;\n    const cellsToColor = currentShape.shape[0].length;\n    for (let rowIndex = 0; rowIndex < rowsToColor; rowIndex++) {\n        for (let cellIndex = 0; cellIndex < cellsToColor; cellIndex++) {\n            if (currentShape.shape[rowIndex][cellIndex]) {\n                const x = currentX + cellIndex;\n                const y = currentY + rowIndex;\n                // Проверяем, не выходит ли за границы\n                if (x >= 0 && x < 10 && y >= 0 && y < 20) {\n                    const cell = (_a = tetrisPlaygroundTarget === null || tetrisPlaygroundTarget === void 0 ? void 0 : tetrisPlaygroundTarget.children[y]) === null || _a === void 0 ? void 0 : _a.children[x];\n                    if (cell) {\n                        cell.style.backgroundColor = currentShape.color;\n                    }\n                }\n            }\n        }\n    }\n}\n// Функция для удаления предыдущего состояния движущейся фигуры\nfunction removePreviousShape() {\n    var _a;\n    const rowsToClear = currentShape.shape.length;\n    const cellsToClear = currentShape.shape[0].length;\n    for (let rowIndex = 0; rowIndex < rowsToClear; rowIndex++) {\n        for (let cellIndex = 0; cellIndex < cellsToClear; cellIndex++) {\n            if (currentShape.shape[rowIndex][cellIndex]) {\n                const x = currentX + cellIndex;\n                const y = currentY + rowIndex;\n                // Проверяем, не выходит ли за границы\n                if (x >= 0 && x < 10 && y >= 0 && y < 20) {\n                    // Очищаем только если здесь нет зафиксированного блока\n                    if (!playground[y][x]) {\n                        const cell = (_a = tetrisPlaygroundTarget === null || tetrisPlaygroundTarget === void 0 ? void 0 : tetrisPlaygroundTarget.children[y]) === null || _a === void 0 ? void 0 : _a.children[x];\n                        if (cell) {\n                            cell.style.backgroundColor = '';\n                        }\n                    }\n                }\n            }\n        }\n    }\n}\n// Функция для поворота фигуры на 90 градусов\nfunction rotateShape(shape) {\n    const rotatedShape = [];\n    const rows = shape.length;\n    const cols = shape[0].length;\n    for (let col = 0; col < cols; col++) {\n        rotatedShape[col] = [];\n        for (let row = rows - 1; row >= 0; row--) {\n            rotatedShape[col][rows - 1 - row] = shape[row][col];\n        }\n    }\n    return rotatedShape;\n}\n// Функция для перемещения фигуры влево и вправо\nfunction moveShape(direction) {\n    if (!isCollision(currentShape.shape, currentX + direction, currentY)) {\n        removePreviousShape();\n        currentX += direction;\n        renderShape();\n    }\n}\n// Функция для создания игрового поля как массива\nfunction createPlayground() {\n    const playground = [];\n    for (let row = 0; row < 20; row++) {\n        playground[row] = new Array(10).fill(0);\n    }\n    return playground;\n}\n// Функция для генерации новой фигуры\nfunction generateNewShape() {\n    const shapeKeyIndex = Math.floor(Math.random() * shapeKeys.length);\n    const shapeKey = shapeKeys[shapeKeyIndex];\n    currentShape.shape = _shapes__WEBPACK_IMPORTED_MODULE_0__.shapes[shapeKey].shape;\n    currentShape.color = _shapes__WEBPACK_IMPORTED_MODULE_0__.shapes[shapeKey].color;\n    currentX = 3;\n    currentY = 0;\n}\n// Проверка столкновения фигуры с границами или другими фигурами\nfunction isCollision(shape, x, y) {\n    for (let row = 0; row < shape.length; row++) {\n        for (let col = 0; col < shape[row].length; col++) {\n            if (shape[row][col]) {\n                const newX = x + col;\n                const newY = y + row;\n                // Проверяем границы поля\n                if (newX < 0 || newX >= 10 || newY >= 20) {\n                    return true;\n                }\n                // Проверяем на столкновение с зафиксированными блоками\n                if (playground[newY][newX]) {\n                    return true;\n                }\n            }\n        }\n    }\n    return false;\n}\n// Фиксация фигуры на игровом поле\nfunction fixShape() {\n    for (let row = 0; row < currentShape.shape.length; row++) {\n        for (let col = 0; col < currentShape.shape[row].length; col++) {\n            if (currentShape.shape[row][col]) {\n                playground[currentY + row][currentX + col] = 1;\n            }\n        }\n    }\n}\n// Функция для удаления заполненных линий\nfunction removeFullLines() {\n    let rowsToAdd = 0;\n    for (let row = playground.length - 1; row >= 0; row--) {\n        if (playground[row].every((cell) => cell === 1)) {\n            playground.splice(row, 1);\n            rowsToAdd++;\n        }\n    }\n    for (let i = 0; i < rowsToAdd; i++) {\n        playground.unshift(new Array(10).fill(0));\n    }\n    renderFixedBlocks();\n}\n// === Начало выполнения программы ===\n// Инициализируем игровое поле\nconst tetrisPlaygroundTarget = document.querySelector('.tetris-playground');\nif (tetrisPlaygroundTarget) {\n    drawTetrisPlayground(10, 20, tetrisPlaygroundTarget);\n}\n// Получаем ключи фигур\nconst shapeKeys = Object.keys(_shapes__WEBPACK_IMPORTED_MODULE_0__.shapes);\n// Инициализируем текущую фигуру\n// TODO: Сделать динамичным\nconst currentShape = {\n    shape: _shapes__WEBPACK_IMPORTED_MODULE_0__.shapes['S'].shape,\n    color: _shapes__WEBPACK_IMPORTED_MODULE_0__.shapes['S'].color,\n};\nlet currentX = 3;\nlet currentY = 0;\nlet speed = 1000; // Начальная скорость\nlet isPaused = false;\nconst playground = createPlayground();\n// Отображаем начальную фигуру\nrenderShape();\n// Основной игровой цикл\nfunction gameLoop() {\n    setTimeout(() => {\n        if (!isPaused) {\n            // проверка на столкновение, если столкновения нет, то спускаем фигуру\n            if (!isCollision(currentShape.shape, currentX, currentY + 1)) {\n                // удаляем предыдущую движущуюся фигуру\n                removePreviousShape();\n                // спускаем координату строки на 1 единицу вниз\n                currentY++;\n                // и снова рисуем фигуру, только на 1 строчку ниже\n                renderShape();\n            }\n            else {\n                fixShape();\n                removeFullLines();\n                generateNewShape();\n                if (isCollision(currentShape.shape, currentX, currentY)) {\n                    alert('Игра окончена');\n                    return;\n                }\n                renderShape();\n            }\n        }\n        gameLoop();\n    }, speed);\n}\n// Запускаем игровой цикл\ngameLoop();\n// Обработчик клавиш для управления фигурой\ndocument.addEventListener('keydown', (e) => {\n    if (e.code === 'Space') {\n        const newShape = rotateShape(currentShape.shape);\n        if (!isCollision(newShape, currentX, currentY)) {\n            removePreviousShape();\n            currentShape.shape = newShape;\n            renderShape();\n        }\n    }\n    else if (e.code === 'ArrowLeft') {\n        moveShape(-1);\n    }\n    else if (e.code === 'ArrowRight') {\n        moveShape(1);\n    }\n    else if (e.code === 'ArrowDown') {\n        speed = 100; // Ускоряем падение фигуры\n    }\n});\n// Обработчик отпускания клавиш\ndocument.addEventListener('keyup', (e) => {\n    if (e.code === 'ArrowDown') {\n        speed = 1000; // Возвращаем стандартную скорость\n    }\n});\n// Получаем элементы кнопок\nconst moveLeftBtn = document.getElementById(\"move-left\");\nconst rotateBtn = document.getElementById(\"rotate\");\nconst moveRightBtn = document.getElementById(\"move-right\");\nconst pauseBtn = document.getElementById(\"pause\");\nconst musicToggleBtn = document.getElementById(\"music-toggle\");\nconst backgroundMusic = new Audio(\"./audio/music.mp3\");\nbackgroundMusic.loop = true; // Музыка зацикливается\nlet isMusicPlaying = false;\nfunction toggleMusic() {\n    isMusicPlaying = !isMusicPlaying;\n    if (isMusicPlaying) {\n        musicToggleBtn.textContent = \"🔇\";\n        backgroundMusic.play();\n    }\n    else {\n        musicToggleBtn.textContent = \"🎵\";\n        backgroundMusic.pause();\n    }\n}\nfunction togglePause() {\n    isPaused = !isPaused;\n    if (isPaused) {\n        pauseBtn.textContent = \"▶️\";\n        console.log(\"Game paused\");\n    }\n    else {\n        pauseBtn.textContent = \"⏸️\";\n        console.log(\"Game resumed\");\n    }\n}\n// === Привязка событий к кнопкам ===\nmoveLeftBtn.addEventListener(\"click\", () => {\n    console.log(\"Move left clicked\");\n    moveShape(-1); // Перемещение фигуры влево\n});\nrotateBtn.addEventListener(\"click\", () => {\n    console.log(\"Rotate clicked\");\n    const newShape = rotateShape(currentShape.shape);\n    if (!isCollision(newShape, currentX, currentY)) {\n        removePreviousShape();\n        currentShape.shape = newShape;\n        renderShape();\n    }\n});\nmoveRightBtn.addEventListener(\"click\", () => {\n    console.log(\"Move right clicked\");\n    moveShape(1); // Перемещение фигуры вправо\n});\npauseBtn.addEventListener(\"click\", togglePause);\nmusicToggleBtn.addEventListener(\"click\", toggleMusic);\ngameLoop();\n\n\n//# sourceURL=webpack://tetris/./src/ts/index.ts?");

/***/ }),

/***/ "./src/ts/shapes.ts":
/*!**************************!*\
  !*** ./src/ts/shapes.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shapes: () => (/* binding */ shapes)\n/* harmony export */ });\nconst shapes = {\n    S: {\n        shape: [\n            [0, 1, 1],\n            [1, 1, 0],\n        ],\n        color: 'yellowgreen',\n    },\n    Z: {\n        shape: [\n            [1, 1, 0],\n            [0, 1, 1],\n        ],\n        color: 'red',\n    },\n    T: {\n        shape: [\n            [1, 1, 1],\n            [0, 1, 0],\n        ],\n        color: 'purple',\n    },\n    O: {\n        shape: [\n            [1, 1],\n            [1, 1],\n        ],\n        color: 'yellow',\n    },\n    J: {\n        shape: [\n            [0, 1],\n            [0, 1],\n            [1, 1],\n        ],\n        color: 'blue',\n    },\n    L: {\n        shape: [\n            [1, 0],\n            [1, 0],\n            [1, 1],\n        ],\n        color: 'orange',\n    },\n    I: {\n        shape: [[1], [1], [1], [1]],\n        color: 'aqua',\n    },\n};\n\n\n//# sourceURL=webpack://tetris/./src/ts/shapes.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/index.ts");
/******/ 	
/******/ })()
;