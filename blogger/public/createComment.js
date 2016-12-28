$(document).ready(function(){
    $('#subCom').submit('click', function(e){
        e.preventDefault()
        const headers = {
            'csrf-token': $('[name="_csrf"]').val()
        } 
        const url = '/ajax' + $(this).attr('action')  
        $.ajax({
            url,
            data:{
                valami: "szia",
                id:  $(this).attr('action').split('/')[2],
                text:  $('#newCommentText').val()
            }.serializeArray(),
            dataType: 'html',
            method: 'POST',
            headers
        }).then(function(result){
            let html='';
            html+=`<ul>
                    <form id="`+result.id+`" class="form-horizontal commentform" action="dl" method="post">
                    <li>          
                        <div>`+result.text+url+`</div>`+     
                        "{% if currentUser.id == com.user_id %}"
                        +`<a class="btn btn-danger comDelete" href="/blog/{{blog.id}}/comment/`+result.id+`/delete" role="button">Hozzászólás törlése</a>
                        `+"{% endif %}"+
                        `</li>
                </form>
                </ul>`;
            $('.newComDiv').html(html);    
        })
    })    
});