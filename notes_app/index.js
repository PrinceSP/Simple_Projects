let form = document.querySelector('form');
let title = document.querySelector('input');
let notes = document.querySelector('textarea');

form.addEventListener('submit',getNote);

function getNote(e){
  e.preventDefault();
  let results = {
    t:title.value,
    n:notes.value
  };
  addNote(results.t, results.n)
  reset(title,notes);
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

  resultsNote.appendChild(titleHolder)
  resultsNote.appendChild(notesHolder)
  resultsNote.appendChild(detail)
  resultContainer.append(resultsNote)

}

function reset(title,notes){
  title.value = '';
  notes.value = '';
  return title,notes;
}
