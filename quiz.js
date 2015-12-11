/*Get Data From server*/
window.fetch('/quiz1').then(function (response) {
  response.text().then(function (data) {
//make response into object so that we can manipulate
    var quiz = JSON.parse(data)
//create title
    var title = document.getElementById('title')
    title.innerText = `How Well Do You Know ${quiz['name']}?`
//create quizContainer
    var quizContainer = document.getElementById('quiz')
//create questionContainer
    var questionContainer = document.createElement('div')
    //give questionContainer the class of 'questionContainer'
    questionContainer.classList.add('questionContainer')
//Append ie: add questionContainer into quizContainer
    quizContainer.appendChild(questionContainer)
//Edit inner Text
    var question = document.createElement('div')
    question.innerText = quiz['questions'][0]['question']
    questionContainer.appendChild(question)
    var options = quiz['questions'][0]['wrongAnswers']
    var rightAnswer = quiz['questions'][0]['rightAnswer']
    options.push(rightAnswer)
    options = _.shuffle(options)
    //console.log(options)
    options.forEach(function(option){
      console.log(option)
//create element and put it into DOM
      var optionbox = document.createElement('div')
      optionbox.innerText = option
      questionContainer.appendChild(optionbox)
      optionbox.classList.add('option')
    })

quizContainer.addEventListener('click', clickHandler)

function clickHandler(event){
  var clickAnswer = event.target
  if (clickAnswer.className !== 'option') return
  questionContainer.classList.add("isHidden")

}
  })
})
