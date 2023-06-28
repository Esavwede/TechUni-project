


// Create Job Elements 

function createListItem() {
  try {

    // Create a new li element
    const listItem = document.createElement('li');

    // Add the specified classes to the li element
    listItem.classList.add(
      'flex',
      'mx-3',
      'w-full',
      'flex-col',
      'items-start',
      'py-6',
      'px-4',
      'shadow-xl',
      'sm:mx-auto',
      'bg-papayawhip-light',
      'text-violet-800',
      'sm:w-1/2',
      'sm:text-base'
    );

    return listItem
  }
  catch (e) {
    console.log('Error occured while creating Jobs List Item ')
    console.log(e)
  }
}


function createListItemHeader(headerText) {
  try {
    // Create a new h1 element
    const heading = document.createElement('h1');

    // Add the specified classes to the h1 element
    heading.classList.add('text-2xl', 'my-3');
    heading.innerHTML = headerText

    return heading
  }
  catch (e) {
    console.log(' Error occured while creating list item header ')
    console.log(e)
  }
}

function createJobRoleElement(jobRoleText) {
  try {
    const jobRole = document.createElement('p')
    jobRole.classList.add('my-2')
    jobRole.innerText = jobRoleText
    return jobRole
  }
  catch (e) {
    console.log(' Error occured while creating Job role Element ')
    console.log(e)
  }
}

function createJobLocationElement(jobLocationText) {
  try {
    const jobLocationElement = document.createElement('p')
    jobLocationElement.classList.add('my-2')
    jobLocationElement.innerText = jobLocationText
    return jobLocationElement
  }
  catch (e) {
    console.log(' Error occured while creating Job Location Element ')
    console.log(e)
  }
}

function createJobSalaryElement(jobSalaryText) {
  try {
    const jobSalaryElement = document.createElement('p')
    jobSalaryElement.classList.add('my-2')
    jobSalaryElement.innerText = jobSalaryText
    return jobSalaryElement
  }
  catch (e) {
    console.log(' Error occured while creating job salary Element ')
    console.log(e)
  }
}

function createJobLinkElement(job_link) {
  try {

    const jobLinkParagraph = document.createElement("p")
    jobLinkParagraph.classList.add("my-2")


    const jobLink = document.createElement('a')
    jobLink.classList.add('my-2')
    jobLink.classList.add('job-link-style')
    jobLink.href = job_link
    jobLink.target = "_blank"
    jobLink.innerText = "Apply"


    jobLinkParagraph.appendChild(jobLink)
    return jobLinkParagraph
  }
  catch (e) {
    console.log(' Error occured while creating Job Link Element ')
    console.log(e)
  }
}

function createJobContentElement(jobPostText) {
  try {
    //     <p class="my-2"> Description: 
    //   <%=post.content.substring(0, 100) + " ..."%>


    // </p>

    const jobContentElement = document.createElement("p")
    jobContentElement.classList.add('my-2')
    jobContentElement.innerText = ' Description: ' + jobPostText

    return jobContentElement
  }
  catch (e) {
    console.log(' Error occured while creating job content ')
    console.log(e)
  }
}

function createReadMoreButton(job_id) {
  try {
    // <a href="/job/<%=post._id%>">Read More</a>
    const readMoreButton = document.createElement('a')


    readMoreButton.classList.add('w-full')
    readMoreButton.classList.add('sm:w-1/2') 
    readMoreButton.classList.add('text-center') 
    readMoreButton.classList.add('rounded-xl') 
    readMoreButton.classList.add('p-3') 
    readMoreButton.classList.add('my-3') 
    readMoreButton.classList.add('bg-violet-800') 
    readMoreButton.classList.add('text-white') 


    readMoreButton.href = `/job/${job_id}`
    readMoreButton.innerText = 'Read More'

    return readMoreButton
  }
  catch (e) {
    console.log(' Error occured while creating Read More Button ')
    console.log(e)
  }
}


function createJobElement(job) {
  try {
    const jobElement = createListItem()
    const jobTitle = createListItemHeader(job.title)
    const jobRole = createJobRoleElement(job.role)
    const jobLocation = createJobLocationElement(job.location)
    const jobSalary = createJobSalaryElement(job.salary)
    const jobLink = createJobLinkElement(job.link)
    const jobContent = createJobContentElement(job.content)
    const jobReadMoreButton = createReadMoreButton(job._id)


    jobElement.appendChild(jobTitle)
    jobElement.appendChild(jobRole)
    jobElement.appendChild(jobLocation)
    jobElement.appendChild(jobSalary)
    jobElement.appendChild(jobLink)
    jobElement.appendChild(jobContent)
    jobElement.appendChild(jobReadMoreButton)

    return jobElement
  }
  catch (e) {
    console.log('ERROR OCCURED WHILE CREATING JOB ELEMENT ')
    console.log(e)
  }
}

function addJobElementToJobsDisplay(job) {
  try {
    const jobsContainer = document.getElementById('jobs-container')
    jobsContainer.appendChild(job)
  }
  catch (e) {
    console.log(' ERROR OCCURED WHILE ADDING JOBS ELEMENT TO JOBS DISPLAY ')
    console.log(e)
  }
}





///////////////////////////////////////////////////////////////////////////////////




const currentUrl = window.location.href;

var jobsInPageLimit = 2
var jobSets = [] 


var skip = 0 

var currentJobsSetIndex = 0 
var prevJobsSetIndex = -1 
var nextJobsSetIndex = 1


  function extractJobData(job)
  {
    console.log(' Extracting Job Data ')
    const _content = job.content.substring(0, 100) + " ..."
    return { title: job.title, role: job.role, location: job.location, salary: job.salary, link: job.link, content: _content, _id: job._id }
  }


function addJobsToDisplay(jobs)
{
try 
{

var jobData 
console.log(' Adding Jobs To Display ')
console.log( jobs ) 
console.log( jobs.length ) 

for( var i = 0; i < jobs.length; i++ )
  { 
   
        console.log( 'here ' + jobs[i] ) 
        jobData = extractJobData( jobs[i] ) 
        console.log( jobData ) 

        var newJob = createJobElement( jobData )
        addJobElementToJobsDisplay( newJob )
  }

  
}
catch(e)
{
console.log(' Error occured while adding jobs to display ') 
console.log(e) 
}
}

function cleanJobs()
{
try 
{
  const jobsContainer = document.getElementById('jobs-container') 
  jobsContainer.innerHTML = null
  
}
catch(e)
{
console.log(' Error occured while cleaning Jobs') 
console.log(e) 
}
}


function nextNavigationButtonClickHandler()
{
    try 
    {
            const nextJobSetExists = jobSets[nextJobsSetIndex] 
        

            console.log(' Next Button Clicked ')
            console.log(` current set index : ${ currentJobsSetIndex }`)
            console.log(` Next Set index ${ nextJobsSetIndex }`)
            console.log(` Prev Set Index : ${ prevJobsSetIndex }`)


            
            if( nextJobSetExists )
            {
                console.log(' Next Jobs Already Loaded, display Job  ')

                prevJobsSetIndex = currentJobsSetIndex 
                currentJobsSetIndex = nextJobsSetIndex 
                nextJobsSetIndex = currentJobsSetIndex + 1 

                console.log(` current set index : ${ currentJobsSetIndex }`)
                console.log(` Next Set index ${ nextJobsSetIndex }`)
                console.log(` Prev Set Index : ${ prevJobsSetIndex }`)

                
                fetchNextJobSetFromMemoryAndDisplay(currentJobsSetIndex)
            }
            else 
            {
                console.log(' Next Job not loaded, fetch from server ')
    
                fetchNextJobSetAndDisplay() 
            }
    }
    catch(e)
    {
        console.log('NEXT_NAVIGATION_BUTTON_CLICK_HANDLER_ERROR')
        console.log(e) 
    }
}

function prevNavigationButtonClickHandler()
{
    try 
    {
        const prevSetExists = jobSets[prevJobsSetIndex]
        const temp = prevJobsSetIndex 

        console.log(' Back Button Clicked ')
        
        console.log(` Prev : ${ prevJobsSetIndex }`)
        console.log(` Current : ${ currentJobsSetIndex }`)
        console.log(` Next: ${ nextJobsSetIndex }`)

        if( prevSetExists )
        {
          console.log(' Prev Set Exists ')
          console.log(' Now in previouse Set ') 

          nextJobsSetIndex  = currentJobsSetIndex 
          currentJobsSetIndex = prevJobsSetIndex 
          prevJobsSetIndex = currentJobsSetIndex - 1 
          fetchPrevJobSetFromMemoryAndDisplay(temp)

          console.log(` Prev : ${ prevJobsSetIndex }`)
          console.log(` Current : ${ currentJobsSetIndex }`)
          console.log(` Next: ${ nextJobsSetIndex }`)
          
        }
        else 
        { 
          console.log(' Prev Set does not exist ')
          console.log(' Reverting to first set ') 

          prevJobsSetIndex = -1
          nextJobsSetIndex =  1 
          currentJobsSetIndex = 0 

          console.log(` Prev : ${ prevJobsSetIndex }`)
          console.log(` Current : ${ currentJobsSetIndex }`)
          console.log(` Next: ${ nextJobsSetIndex }`)


            displayFirstJobSet() 
        }
    }
    catch(e)
    {
        console.log('PREV_NAVIGATION_BUTTON_CLICK_HANDLER_ERROR')
        console.log(e) 
    }
}


function displayFirstJobSet()
{
    try 
    {
        cleanJobs() 
        addJobsToDisplay( jobSets[0] ) 
        appendNavigation() 
    }
    catch(e)
    {
        console.log('DISPLAY_FIRST_JOB_SET_ERROR')
        console.log(e) 
    }
}


function fetchNextJobSetAndDisplay()
{
    try 
    {

        var currentSkip = skip + jobsInPageLimit
        skip = currentSkip 

        fetch(`${currentUrl}/${ currentSkip }/${jobsInPageLimit}`)
        .then(data => {
        return data.json()
        })
        .then(data => {
    
          
            const jobOne = data.posts[0]
            console.log(' Ogaga ')
            console.log( jobOne )


            if( jobOne === undefined )
            {
               console.log(` You're all caught up `)
                return 
            }

            // Initialize Job Set 
           jobSets.push( data.posts ) 

            
            // Display 
            cleanJobs() 
            addJobsToDisplay( data.posts ) 
            appendNavigation() 

            prevJobsSetIndex = currentJobsSetIndex 
            currentJobsSetIndex = nextJobsSetIndex 
            nextJobsSetIndex = currentJobsSetIndex + 1 

            
            console.log(` current set index : ${ currentJobsSetIndex }`)
            console.log(` Next Set index ${ nextJobsSetIndex }`)
            console.log(` Prev Set Index : ${ prevJobsSetIndex }`)
        
        });
    }
    catch(e)
    {
        console.log('FETCH_NEXT_JOB_SET_ERROR')
        console.log(e) 
    }
}

function fetchNextJobSetFromMemoryAndDisplay(setId)
{
    try 
    {
            console.log("ERRRRRRR")
            console.log( setId ) 
            const jobSet = jobSets[setId]
            cleanJobs() 
            addJobsToDisplay( jobSet ) 
            appendNavigation() 
    }
    catch(e)
    {
        console.log('FETCH_NEXT_JOB_SET_FROM_MEMORY_AND_DISPLAY_ERROR')
        console.log(e) 
    }
}

function fetchPrevJobSetFromMemoryAndDisplay(setId)
{
    try 
    {
            const jobSet = jobSets[setId]
            console.log( jobSet ) 
            cleanJobs() 
            addJobsToDisplay( jobSet ) 
            appendNavigation() 
    }
    catch(e)
    {
        console.log('FETCH_NEXT_JOB_SET_FROM_MEMORY_AND_DISPLAY_ERROR')
        console.log(e) 
    }
}

function appendNavigation()
{
try 
{

  const navigationButtonsContainer = document.createElement('div')
  navigationButtonsContainer.id = 'navigation-buttons-container' 

  const backButton = document.createElement('button') 
  backButton.id = 'back-navigation-button' 
  backButton.innerText = 'Back'
  backButton.addEventListener('click', prevNavigationButtonClickHandler, false )

  const nextButton = document.createElement('button') 
  nextButton.id = 'next-navigation-button' 
  nextButton.innerText = 'Next' 
  nextButton.addEventListener('click', nextNavigationButtonClickHandler, false)

  navigationButtonsContainer.appendChild( backButton )
  navigationButtonsContainer.appendChild( nextButton ) 


  const jobsContainer = document.getElementById('jobs-container')
  jobsContainer.appendChild( navigationButtonsContainer ) 


}
catch(e)
{
console.log(' Error occured while appending navigation buttons ')
console.log(e) 
}
}

function fetchAndDisplayInitialJobs()
{
    try 
    {
        fetch(`${currentUrl}/0/${jobsInPageLimit}`)
        .then(data => {
        return data.json()
        })
        .then(data => {
            
        // Initialize Job Set 
        jobSets.push( data.posts ) 

        // Display 
        addJobsToDisplay( data.posts ) 
        appendNavigation() 
        
        });

    }
    catch(e)
    {
        console.log('FETCH_AND_DISPLAY_INITIAL_JOBS_ERROR')
        console.log(e) 
    }
}

fetchAndDisplayInitialJobs()