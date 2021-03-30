let form = document.querySelector('form');
let youTitle = document.querySelector('input');
let notes = document.querySelector('textarea');

form.addEventListener('submit',getNote);

function getNote(e){
  e.preventDefault();
  let results = {
    t:youTitle.value,
    n:notes.value
  };
  addNote(results.t, results.n)
  return results;
}

function addNote(title,note){
  let resultContainer = document.querySelector('#results_notes');
  let resultsNote = document.createElement('div');
  let titleHolder = document.createElement('p');
  let notesHolder = document.createElement('p');
  let detail = document.createElement('button');

  resultsNote.className = "resultNotes"
  titleHolder.className = "result_title"
  notesHolder.className = "result_notes"

  detail.textContent = 'View Details';
  titleHolder.textContent = title;
  notesHolder.textContent = note;

  if (title == '' || note == '') {
    validation(youTitle,notes);
  } else{
    resultsNote.appendChild(titleHolder)
    resultsNote.appendChild(notesHolder)
    resultsNote.appendChild(detail)
    resultContainer.append(resultsNote)
    reset(youTitle,notes);
  }
}

function reset(titleBox,noteBox){
  titleBox.value = '';
  noteBox.value = '';
  return titleBox,noteBox;
}

function validation(titleBox,noteBox){
  titleBox.required = true;
  noteBox.required = true;
  return titleBox,noteBox;
}
