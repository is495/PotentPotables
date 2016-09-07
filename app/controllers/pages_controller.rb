class PagesController < ApplicationController
  def index
    @title = "Elevate Blue | Lake Tahoe Tech Accelerator & Startup Studio"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator Studio Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is a tech accelerator & startup studio on the north shore of Lake Tahoe. We invest heavily in entrepreneurs and engineers, creating a highly unique tech scene high up in the Sierra Mountains, but with incredibly close proximity to Silicon Valley."

  end

  def contact
    @title ="Elevate Blue | Contact Elevate Blue"
    @keywords ="Elevate Blue ElevateBlue Elevated Technology Accelerator Incubator Lake Tahoe Studio Silicon Valley San Francisco Incline Village California Nevada"
    @description ="Elevate Blue is a startup studio on the north shore of Lake Tahoe. We invest heavily in entrepreneurs and engineers, creating a highly unique tech scene high up in the Sierra Mountains, but with incredibly close proximity to Silicon Valley."
  end

  def blog
    @title = "Elevate Blue | Elevate Blue Blog"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator Blog Blogging Incubator Studio Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is a startup studio on the north shore of Lake Tahoe. Our blog is a place to read and discuss elevated ideas and news on startups, technology, and marketing."
  end
  def news
    @title = "Elevate Blue | Elevate Press and News"
    @keywords = "Elevate Blue ElevateBlue News Press Elevated Technology Tahoe Press Accelerator Blog Blogging Incubator Studio Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is a startup studio on the north shore of Lake Tahoe. We frequently receive press from local and state media outlets."
  end

  def job_ceo
    @title = "Startup Company Entrepreneur CEO Job - Lake Tahoe"
    @keywords = "Tech Jobs Startup Entrepreneur CEO Managment Programmers Developers Engineers Studio Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"

    @description = "Elevate Blue is hiring entrepreneurs and experienced CEOs for full-time jobs with our startup tech companies in north Lake Tahoe."
    @message = Message.new
  end

  def jobs
    @title = "Elevate Blue | Lake Tahoe Tech and Startup Jobs"
    @keywords ="Tech Jobs Startup Entrepreneurs Programmers Developers Engineers Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is hiring startup entrepreneurs and technology professionals to staff a wide array of jobs with tech companies in north Lake Tahoe."

  end

  def job_fullstack
    @title = "Elevate Blue | Elevate Blue Blog"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator Blog Blogging Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is a startup studio on the north shore of Lake Tahoe. Our blog is a place to read and discuss elevated ideas and news on startups, technology, and marketing."
@message = Message.new
  end

  def job_react
    @title = "ReactJS Developer - Lake Tahoe"
    @keywords = "Tech Jobs Startup Entrepreneurs React ReactJS Native Online Mobile Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "We are looking for an ReactJS / React Native developer to lead the evolution of one of our most promising and exciting portfolio companies. This individual will be a key member of the team and take full technical ownership of the product. "
@message = Message.new
  end

  def job_ruby
    @title = "Ruby FullStack Developer - Lake Tahoe"
    @keywords = "Tech Jobs Startup Entrepreneurs Ruby Full Stack Online Mobile Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "We are looking for a full stack developer to lead the evolution of one of our most promising and exciting portfolio companies (Kick Party).  "
@message = Message.new
  end
  def about
    @title = "Elevate Blue | About Elevate Blue"
    @keywords = "Tech Jobs Startup Entrepreneur About About Us Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is a technology studio on the north shore of Lake Tahoe. We invest heavily in entrepreneurs and engineers, creating a highly unique tech scene high up in the Sierra Mountains, but with incredibly close proximity to Silicon Valley."
@message = Message.new
  end

  def job_social
    @title = "Social Media Marketing Intern - Lake Tahoe"
    @keywords = "Tech Jobs Startup Entrepreneurs Social Media Marketing Online Mobile Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is hiring social media marketing interns for online and mobile marketing jobs for our startup tech companies in north Lake Tahoe."
@message = Message.new
  end

  def job_marketing
    @title = "Marketing Assistant - Lake Tahoe"
    @keywords = "Tech Jobs Startup Entrepreneurs Marketing Assistant Online Offline Mobile Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is hiring a Marketing Assistant to manage online, offline and mobile marketing for our startup tech companies in north Lake Tahoe."
@message = Message.new
  end

  def job_admin
    @title = "Elevate Blue | Jobs | Administrative Assistant"
    @keywords = "Tech Jobs Startup Administrative Assistant Elevate Blue ElevateBlue Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is hiring an Administrative Assistant to assist with our growing startup studio and our startup tech companies in north Lake Tahoe."
  @message = Message.new
  end

  def startups
    @title = "Elevate Blue | Lake Tahoe Startups"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue is a startup accelerator on the north shore of Lake Tahoe. Our impressive portfolio of startups is designed to take advantage of every aspect of the rapidly evolving technology industry "
  end

  def team
    @title = "Elevate Blue | Elevate Blue Team"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator Team Members Kelly Benson Jameson Stafford Scott Levy Ted Kelly Kami Tersini Incubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = " The Elevate Blue team is a mix of dynamic, experienced and innovative individuals from the fields of technology, marketing, sales, and communications."
  end

  def sxsw
    @title = "Elevate Blue | South by South West"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator South By South West SXSW Conference Voting Panel Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Elevate Blue has several potential 2016 SXSW panels that are now open to community voting. Please use this page to learn more about our panels, speakers, and topics, as well as to vote for Elevate Blue. "
  end

  def upcoming
    @title = "Elevate Blue | Elevate Blue Upcoming"
    @keywords = "Elevate Blue ElevateBlue Elevated Technology Accelerator Coming Soon Upcoming IdeasIncubator Lake Tahoe Silicon Valley San Francisco Incline Village California Nevada"
    @description = "Here at Elevate Blue we occasionally have more ideas than hours in the day. Here is a list of ideas we're working to bring into the community."
  end
end
