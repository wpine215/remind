import face_recognition

# known_image_url = static()
# unknown_image_url = static()
known_image = face_recognition.load_image_file('ram_train.jpg')
unknown_image = face_recognition.load_image_file('ram_test.jpg')

known_encoding = face_recognition.face_encodings(known_image)[0]
unknown_encoding = face_recognition.face_encodings(unknown_image)[0]

results = face_recognition.compare_faces([known_encoding], unknown_encoding)

print(results)