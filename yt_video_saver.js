class Video {
    constructor(title, creator, link) {
        this.title = title;
        this.creator = creator;
        this.link = link;
    }
}

class UI {
    addVideoToList(video) {
        const list = document.getElementById("video-list");
        const row = document.createElement("tr");
        row.innerHTML = `
        
        <td>${video.title}<td>
        <td>${video.creator}<td>
        <td>${video.link}<td>
        <td><a href="" class="delete">X</a></td>
        `;
    list.appendChild(row);
    }

showAlert(message, className){
    
    const div = document.createElement('div')
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container')
    const form = document.querySelector("#video-form");
    container.insertBefore(div, form)
    
    setTimeout(function(){
        document.querySelector(".alert").remove();
    }, 3000)

}

deleteVideo(target) {
    if(target.className === "delete"){
        target.parentElement.parentElement.remove();
    }
}

clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("creator").value = "";
    document.getElementById("link").value = "";
}

}

document.getElementById("video-form").addEventListener("submit",function(e){
    const title = document.getElementById("title").value
    const creator = document.getElementById("creator").value
    const link = document.getElementById("link").value
    const video = new Video(title, creator, link);
    const ui = new UI();

    if(title === "" || creator === "" || link === ""){
        ui.showAlert("Please fill in required information", "error")
    }
    else{
        ui.addVideoToList(video);
        ui.showAlert("Video Added", "success");
        ui.clearFields();
    }
    e.preventDefault();
})

document.getElementById("video-list").addEventListener("click", function(e){
    const ui = new UI();

    ui.deleteVideo(e.target);
    
    ui.showAlert("Video Removed!", "success");

    e.preventDefault();
});     