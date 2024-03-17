const gitlink="https://api.github.com/users/"
let link="https://twitter.com/"
let dataInput=document.querySelector('[data-input]')
let dataSubmit=document.querySelector('[submit-button]')
let dataClear=document.querySelector('[data-clear]')
let dataImage=document.querySelector('[data-image]')
let dataName=document.querySelector('[data-name]')
let dataGitLink=document.querySelector('[data-gitlink]')
let dataBio=document.querySelector('[data-bio]')
let dataJoined=document.querySelector('[data-datejoined]')
let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let dataRepos=document.querySelector('[data-repos]')
let dataFollower=document.querySelector('[data-followers]')
let dataFollowing=document.querySelector('[data-following]')
let dataLocation=document.querySelector('[data-location]')
let dataLink=document.querySelector('[data-link]')
let twitterLink=document.querySelector('[twitter-link]')
let dataWork=document.querySelector('[data-work]')
function dataRender(data){
    dataImage.src=data?.avatar_url
    dataName.textContent=data?.name
    dataGitLink.textContent=`@${data?.login}`
    dataGitLink.href=data?.html_url
    dataBio.textContent=data?.bio
    let tempdate=data?.created_at
    let tempdate2=tempdate.split('-')
    let date=tempdate2[2].split('T')
    dataJoined.textContent=`Joined ${date[0]} ${months[tempdate2[1]-1]} ${tempdate2[0]}`
    dataRepos.textContent=data?.public_repos
    dataFollower.textContent=data?.followers
    dataFollowing.textContent=data?.following
    dataLocation.textContent=data?.location
    dataWork.textContent=data?.company
    if(data?.twitter_username){
        let link2=link+data?.twitter_username
        twitterLink.href=link2
        twitterLink.textContent=`@${data?.twitter_username}`
    }
    else{
        twitterLink.textContent='Not Available'
    }
    if(data?.blog){
        dataLink.href=data?.blog
        dataLink.textContent=`@${data?.blog}`
    }
    else{
        dataLink.textContent='Not Available'
    }
}
async function fetchProfile(getval){
    if(getval){
        let link=gitlink+getval
        const response=await fetch(link)
        let data=await response.json()
        dataRender(data)
    }
}
let defaultc='lovebabbar'
fetchProfile(defaultc)
dataSubmit.addEventListener('click',()=>{
    let sentData=dataInput.value
    fetchProfile(sentData)
})
dataClear.addEventListener('click',()=>{
    dataInput.value=''
})
dataInput.addEventListener('input',()=>{
    dataClear.classList.add('active')
})
function switchMode(){
    if(colNow.textContent=='LIGHT'){
        sunImg.classList.remove('active')
        colNow.textContent='DARK'
        searchbar.classList.add('light')
        wrapper.classList.add('light')
        profileSec.classList.add('light')
        moonImg.classList.add('active')
    }
    else{
        moonImg.classList.remove('active')
        wrapper.classList.remove('light')
        searchbar.classList.remove('light')
        profileSec.classList.remove('light')
        sunImg.classList.add('active')
        colNow.textContent='LIGHT'
    }
}
let profileSec=document.querySelector('.profile-sec')
let wrapper=document.querySelector('.wrapper')
let searchbar=document.querySelector('.search-bar')
let colNow=document.querySelector('[text-col]')
let sunImg=document.querySelector('[sun-img]')
let moonImg=document.querySelector('[moon-img]')
let lightDark=document.querySelector('[light-mode]')
lightDark.addEventListener('click',switchMode)