import re

# Define the pattern to search for YouTube short URLs
pattern = re.compile(r'https://youtu\.be/([a-zA-Z0-9_-]+)')

# Read the content of the .txt file
with open('input.txt', 'r') as file:
    content = file.read()

# Debug: Print the content of the file
print("Content of the file:")
print(content)

# Find all matches of the pattern in the content
matches = pattern.findall(content)

# Debug: Print the matches found
print("Matches found:")
print(matches)

# Generate the JavaScript code
js_code = ''
for i, video_id in enumerate(matches, start=1):
    js_code += f"id: '{i}', title: 'African History Video {i}', videoId: '{video_id}', thumbnail: 'https://img.youtube.com/vi/{video_id}/0.jpg',\n"

# Save the generated JavaScript code to a file
with open('new_videos.js', 'w') as js_file:
    js_file.write(js_code)

print("JavaScript code has been saved to new_videos.js")