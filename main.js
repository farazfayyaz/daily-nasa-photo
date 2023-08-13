document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    let date = document.querySelector('#userDate').value
    
    fetch(`https://api.nasa.gov/planetary/apod?api_key=blXfHXJkALflEdSuR8eLwH5RJq3zxAiuHyYkprvH&date=${date}`)
        .then(res => res.json())
        .then(data => {
                console.log(data)
                if(data.media_type === 'image'){
                    document.querySelector('img').src = data.url
                    document.querySelector('iframe').src = ''
                } else if(data.media_type === 'video'){
                    document.querySelector('img').src = ''
                    document.querySelector('iframe').src = data.url
                }
                
                document.querySelector('#bio').innerText = data.explanation
            
            })
        .catch(err => {
            console.log(`err ${err}`)
        })
}