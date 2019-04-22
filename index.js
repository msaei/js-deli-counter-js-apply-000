var lastNumber = 0
function takeANumber(line){
  lastNumber++
  line.push(lastNumber)
  return `Welcome. You are number ${lastNumber} in line.`
}

function nowServing(line){
  if (line.length === 0) return "There is nobody waiting to be served!"
  return `Currently serving ${line.shift()}.`
}

function currentLine(line){
  if (line.length === 0) return "The line is currently empty."
  var result = `The line is currently: 1. ${line[0]}`
  for (var i = 1; i<line.length; i++){
    result += `, ${i+1}. ${line[i]}`
  }
  return result
}