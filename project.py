from project_module import project_object, image_object, link_object, challenge_object

p = project_object('color_converter', 'Color converter')
p.domain = 'http://www.aidansean.com/'
p.path = 'color'
p.preview_image_ = image_object('http://placekitten.com.s3.amazonaws.com/homepage-samples/408/287.jpg', 408, 287)
p.github_repo_name = 'color_converter'
p.mathjax = False
p.links.append(link_object(p.domain, 'color/', 'Live page'))
p.introduction = 'This is a very simple yet useful script for converting colours from one description to another.  What causes the most frustration here is the difference between US and UK English, as it seems I\'ll never be happy with the uri for this tool.  So I use the word "color" in the context of values the computer understands and "colour" to describe the aesthetic experience of humans.  That makes the best of a bad situation.'
p.overview = '''There are three modes:
<ul>
  <li>Fair dice</li>
  <li>fudge dice</li>
  <li>xkcd dice</li>
</ul>
The fair dice setting is straightforward, the fudge dice have \\([-1,-1,0,0,+1,+1]\\), and the xkcd dice always return \(4\), which is an xkcd in-joke.  The colors can be chosen to match the fudge dice colours we used in the RPG, and since one of our players had OCD and we'd sometimes exchange dice colors to wind him up, there was an option to choose colors randomly.'''

p.challenges.append(challenge_object('The user can enter nonsense values, so the tool should alert the user when this is the case.', 'Add alerts for incorrectly formatted strings and illegal values.', 'To be done'))
