const refreshBlogRunningTime = () => {
    const blog_running_days = document.getElementById("blog_running_days");
    const blog_running_hours = document.getElementById("blog_running_hours");
    const blog_running_mins = document.getElementById("blog_running_mins");
    const blog_running_secs = document.getElementById("blog_running_secs");
    
    const time = new Date() - new Date(2023, 8, 15, 0, 0, 0);
    const d = parseInt(time / 24 / 60 / 60 / 1000);
    const h = parseInt((time % (24 * 60 * 60 * 1000)) / 60 / 60 / 1000);
    const m = parseInt((time % (60 * 60 * 1000)) / 60 / 1000);
    const s = parseInt((time % (60 * 1000)) / 1000);
    
    blog_running_days.innerHTML = d;
    blog_running_hours.innerHTML = h;
    blog_running_mins.innerHTML = m;
    blog_running_secs.innerHTML = s;
  }
  
  refreshBlogRunningTime();
  
  if (typeof bottomTimeIntervalHasSet === "undefined") {
    window.bottomTimeIntervalHasSet = true;
    setInterval(refreshBlogRunningTime, 500);
  }
  