function searchProduct()
{
    //DOM
    const input=document.getElementById('filter').value.toUpperCase();
    //console.log(input)
    const container=document.getElementById('list')
    //console.log(container)
    const cards=document.getElementsByClassName('card')
    console.log(cards)
    for(let i=0;i<cards.length;i++)
    {
        let title=cards[i].querySelector('.card-body h5.card-title')
        //console.log(title)
        if(title.innerText.toUpperCase().indexOf(input)>-1)
        {
            cards[i].style.display="";
        }
        else
        {
            cards[i].style.display="none";
        }
        
    }
    

    }