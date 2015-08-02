from project_module import project_object, image_object, link_object, challenge_object

p = project_object('color', 'Color converter')
p.domain = 'http://www.aidansean.com/'
p.path = 'color'
p.preview_image    = image_object('%s/images/project.jpg'   %p.path, 150, 250)
p.preview_image_bw = image_object('%s/images/project_bw.jpg'%p.path, 150, 250)
p.folder_name = 'aidansean'
p.github_repo_name = 'color_converter'
p.mathjax = False
p.tags = 'Tools,Web design'
p.technologies = 'JavaScript,CSS,HTML'
p.links.append(link_object(p.domain, 'color/', 'Live page'))
p.introduction = 'This is a very simple yet useful script for converting colours from one description to another.  What causes the most frustration here is the difference between US and UK English, as it seems I\'ll never be happy with the uri for this tool.  So I use the word "color" in the context of values the computer understands and "colour" to describe the aesthetic experience of humans.  That makes the best of a bad situation.'
p.overview = '''The user enters an rgb or hex value and the page calculates the corresponding value in the other color space. At the moment it does not alert the user when a value is invalid.'''

p.challenges.append(challenge_object('The user can enter nonsense values, so the tool should alert the user when this is the case.', 'Add alerts for incorrectly formatted strings and illegal values.', 'To be done'))
