const button = document.createElement('button');
button.innerHTML = 'Show Current Time';
button.addEventListener('click', showCurrentTime);
document.body.appendChild(button);

function showCurrentTime() {
    import('moment').then(moment => {
        document.body.removeChild(button);
        const currentTime = moment().format('YYYY-MM-DD HH:mm:ss.SSS');
        const timeLabel = document.createElement('h1');
        timeLabel.innerHTML = currentTime;
        document.body.appendChild(timeLabel);
    });
}
