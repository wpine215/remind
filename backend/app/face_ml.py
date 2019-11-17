import face_recognition
from django.contrib.staticfiles.templatetags.staticfiles import static

known_image_url = static('ram_train.jpg')
unknown_image_url = static('ram_test.jpg')
known_image = face_recognition.load_image_file(known_image_url)
unknown_image = face_recognition.load_image_file(unknown_image_url)

known_encoding = face_recognition.face_encodings(known_image)[0]
unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

results = face_recognition.compare_faces([known_encoding], unknown_encoding)

print(results)