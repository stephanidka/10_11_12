const userName = document.getElementById('userName')
const avatarInput = document.getElementById('avatarInput')
const avatarImage = document.getElementById('avatarImage')
const comment = document.getElementById('comment')
const commentName = document.getElementById('commentName')
const commentAvatar = document.getElementById('commentAvatar')
const commentText = document.getElementById('commentText')
// const avatarImageComment = document.getElementById('avatarImageComment')

function getAvatar(){

    avatarImage.src = avatarInput.value;
    // avatarInput.value = '';
}
document.querySelector('.addAvatar').addEventListener('click', getAvatar);

function addComment(){
    avatarImage.src = 'assets/empty_ava.jpg';
    let newAvatar = document.createElement('img');
    newAvatar.src = avatarInput.value;
    newAvatar.classList.add('newAvatarImage')
    commentAvatar.appendChild(newAvatar);
    let inputName = userName.value;
    let words = inputName.trim().split(/\s+/);
    let transformedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    let resultName = transformedWords.join(' ');
    commentName.textContent = resultName;
    let commentChecked = function(str){
        let lowerStr = str.toLowerCase();
        let modifiedStr = lowerStr.replace(/viagra/g, '***');
        modifiedStr = modifiedStr.replace(/xxx/g, '***');
        return modifiedStr;
    }
    let result = comment.value;
    let resultComment = commentChecked(result)
    commentText.textContent = resultComment;

    userName.value = '';
    avatarInput.value = '';
    comment.value = '';
}

document.querySelector('.add').addEventListener('click', addComment)