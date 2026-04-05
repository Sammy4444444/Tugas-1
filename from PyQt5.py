from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import( QApplication, QWidget, QLabel, QPushButton, QVBoxLayout, QHBoxLayout
)

app = QApplication([])
window = QWidget()
window.setWindowTitle('Try your luck, friend!')
window.resize(400,300)

button1 = QPushButton('PHP')
button2 = QPushButton('JavaScript')
button3 = QPushButton('Python')
button4 = QPushButton('Pascal')
button5 = QPushButton('SQL')
button6 = QPushButton('C++')

layoutV = QVBoxLayout()
layoutH1 = QHBoxLayout()
layoutH2 = QHBoxLayout()
layoutH3 = QHBoxLayout()

layoutH1.addWidget(button1, alignment = Qt.AlignCenter)
layoutH1.addWidget(button2, alignment = Qt.AlignCenter)
layoutH2.addWidget(button3, alignment = Qt.AlignCenter)
layoutH2.addWidget(button4, alignment = Qt.AlignCenter)
layoutH3.addWidget(button5, alignment = Qt.AlignCenter)
layoutH3.addWidget(button6, alignment= Qt.AlignCenter)


layoutV.addLayout(layoutH1)
layoutV.addLayout(layoutH2)
layoutV.addLayout(layoutH3)
window.setLayout(layoutV)
window.show()
app.exec_()













