const outputTextArea = document.getElementById("calc-result")

const isOperator = (char) => {
    const operators = ["*", "+", "-", "%", "/"]
    return operators.includes(char)
}

const isNumeric = (char) => {
    return /^-?\d+$/.test(char);
}

const buttonClicked = (text) => {
    const outputTextArea = document.getElementById("calc-result")
    if (outputTextArea.textContent === "0") {
        outputTextArea.textContent = ""
    }
    const textContent = outputTextArea.textContent
    const lastChar = textContent.charAt(textContent.length - 1)
    if (isOperator(text) && (isOperator(lastChar) || lastChar === '(')) {
        return
    }
    if (lastChar === ')') {
        outputTextArea.textContent += "*"
    }
    outputTextArea.textContent += text
}

const clearText = () => {
    const outputTextArea = document.getElementById("calc-result")
    outputTextArea.textContent = "0"
}

const deleteLastChar = () => {
    const outputTextArea = document.getElementById("calc-result")
    const text = outputTextArea.textContent
    outputTextArea.textContent = text.substring(0, text.length - 1)
    if (outputTextArea.textContent.length === 0) {
        outputTextArea.textContent = "0"
    }
}

const insertParenthesis = () => {
    const outputTextArea = document.getElementById("calc-result")
    if (outputTextArea.textContent === "0") {
        outputTextArea.textContent = ""
    }
    const text = outputTextArea.textContent
    const lastChar = text.charAt(text.length - 1)
    const closed = (text.split(")")).length ?? 0
    const opened = (text.split("(")).length ?? 0
    if (isNumeric(lastChar) || lastChar === ')' || lastChar === '(') {
        if (closed < opened) {
            outputTextArea.textContent += ")"
        } else {
            outputTextArea.textContent += "*("
        }
    } else {
        outputTextArea.textContent += "("
    }
}

const findResult = () => {
    const outputTextArea = document.getElementById("calc-result")
    const result = eval(outputTextArea.textContent)
    outputTextArea.textContent = result
}