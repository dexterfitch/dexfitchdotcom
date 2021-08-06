module API
  class WorksController < ApplicationController
    def index
      works = [
        {
          id: 1,
          name: "Baltimore TMJ", 
          abstract: "This was a really fun project, that flexed my Wordpress, CSS, and even my PDF muscles!", 
          description: "Over the course of a weekend, I helped Baltimore-area dental specialist Dr. Grill re-launch his website on WordPress. Dr. Grill's main concerns that his patients needed to be able to schedule an appointment online, as well as download their patient forms. I went ahead and upgraded Dr. Grill's PDF Patient Forms to be digitally fillable, improving the experience for his patients. I redesigned his site and chose graphics around the colours blue and yellow, with the intention of invoking a feeling of clear skies and relief. My favourite design element I implemented is actually the background! It does a gentle fade back and forth from dark blue to sky blue; I wanted to invoke the calming feeling of breath in-breath out, as well as gentle waves on a shore.", 
          tech: "Wordpress, CSS", 
          client: "TMJ Facial Pain Center", 
          client_type: "Freelance", 
          url: "https://baltimoretmj.com/"
        }, 
        {
          id: 2,
          name: "TeamPro360", 
          abstract: "This was a fun and challenging contract position for a major digital makeover!", 
          description: "Developing a new design and user interface for this start-up app to help keep businesses organized was a real challenge! I was working alone on the UX/UI, frontend design, and editing or creating all of the views. It seemed overwhelming at first, but I was pleasantly surprised with how quickly the new design came together, by leveraging Bootstrap.", 
          tech: "Rails, React, Bootstrap, CSS, jQuery, Javascript", 
          client: "Mt. Tam Innovations", 
          client_type: "Startup", 
          url: "https://www.teampro360.com/"
        },
        {
          id: 3,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Corporate", 
          url: "Coming Soon"
        },
        {
          id: 4,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Personal", 
          url: "Coming Soon"
        },
        {
          id: 5,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Education", 
          url: "Coming Soon"
        },
        {
          id: 6,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Corporate", 
          url: "Coming Soon"
        },
        {
          id: 7,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Personal", 
          url: "Coming Soon"
        },
        {
          id: 8,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Education", 
          url: "Coming Soon"
        },
        {
          id: 9,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Corporate", 
          url: "Coming Soon"
        },
        {
          id: 10,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Personal", 
          url: "Coming Soon"
        },
        {
          id: 11,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Education", 
          url: "Coming Soon"
        },
        {
          id: 12,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Startup", 
          url: "Coming Soon"
        },
        {
          id: 13,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Startup", 
          url: "Coming Soon"
        },
        {
          id: 14,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Freelance", 
          url: "Coming Soon"
        },
        {
          id: 15,
          name: "Coming Soon", 
          abstract: "Coming Soon", 
          description: "Coming Soon", 
          tech: "Coming Soon", 
          client: "Coming Soon", 
          client_type: "Freelance", 
          url: "Coming Soon"
        }
      ]

      render json: { works: works }
    end
  end
end