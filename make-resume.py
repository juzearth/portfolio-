from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable, ListFlowable, ListItem

NAVY = colors.HexColor("#1e3a8a")
INK = colors.HexColor("#1f2937")
GREY = colors.HexColor("#4b5563")

name = ParagraphStyle("n", fontName="Helvetica-Bold", fontSize=24, textColor=NAVY, leading=28)
role = ParagraphStyle("r", fontName="Helvetica", fontSize=12, textColor=INK, leading=16)
meta = ParagraphStyle("m", fontName="Helvetica", fontSize=9.5, textColor=GREY, leading=13)
h = ParagraphStyle("h", fontName="Helvetica-Bold", fontSize=11.5, textColor=NAVY, spaceBefore=12, spaceAfter=3, leading=14)
b = ParagraphStyle("b", fontName="Helvetica", fontSize=10, textColor=INK, leading=14)
bt = ParagraphStyle("bt", parent=b, fontName="Helvetica-Bold")

def section(t):
    return [Paragraph(t, h), HRFlowable(width="100%", thickness=0.8, color=NAVY, spaceAfter=5)]

def bullets(items):
    return ListFlowable([ListItem(Paragraph(i, b), leftIndent=12) for i in items],
                        bulletType="bullet", start="•", leftIndent=12, bulletFontSize=8)

s = []
s += [Paragraph("Peter Ochieng", name), Paragraph("Software Engineer", role),
      Paragraph("Kenya &nbsp;|&nbsp; Email: add your email here &nbsp;|&nbsp; GitHub: add your link here", meta)]

s += section("Profile")
s += [Paragraph("Computer Science and Management Information Systems student at Kibabii University. "
 "I build web systems and Android apps end to end, with a focus on Kenyan use cases such as M-Pesa payments "
 "and student services. Seeking full-stack engineering roles and freelance or remote development work.", b)]

s += section("Skills")
for k, v in [
 ("Frontend", "React, JavaScript, HTML &amp; CSS, Tailwind CSS"),
 ("Backend", "Node.js, Express, PHP, REST APIs, session-based authentication"),
 ("Mobile", "Kotlin, Jetpack Compose, Material 3, Firebase"),
 ("Data", "MySQL, MySQLi, Firebase Realtime Database"),
 ("Payments &amp; APIs", "M-Pesa Daraja (STK Push), Africa's Talking SMS"),
 ("Tooling", "Git &amp; GitHub, GitHub Actions, PM2, VPS deployment"),
]:
    s.append(Paragraph(f"<b>{k}:</b> {v}", b))

s += section("Projects")
for t, tech, d in [
 ("AutoBill Kenya", "React, Node.js, Express, MySQL, M-Pesa Daraja",
  "Billing and WiFi hotspot management system with a customer hotspot portal and admin side; payments through M-Pesa STK Push."),
 ("CampusVoice", "PHP, MySQLi, JavaScript, CSS",
  "Student complaint platform with registration, session-based login, password recovery and a student dashboard."),
 ("MySaver", "Kotlin, Jetpack Compose, Material 3",
  "WhatsApp Status saver for Android 7 to 15 using the Storage Access Framework and MediaStore."),
 ("Car Rental App", "Kotlin, Firebase Authentication, Realtime Database",
  "Android car rental app with user accounts and live booking data."),
 ("Tiriki Online Grocery (proposal)", "System design, M-Pesa Daraja, Africa's Talking",
  "15-page proposal for a Kenya-based grocery delivery platform covering Data Protection Act 2019 compliance, a 12-month agile plan and a costed budget."),
]:
    s += [Paragraph(f"{t} <font color='#4b5563' size='9'>({tech})</font>", bt), Paragraph(d, b), Spacer(1, 4)]

s += section("Education")
s += [Paragraph("Computer Science &amp; Management Information Systems — Kibabii University, Kenya", bt),
      Paragraph("Coursework: MIS (CSC 411), databases, information systems architecture, cloud computing, big data analytics, machine learning.", b)]

s += section("Currently Working Towards")
s += [bullets(["Full-stack depth: React, Node/Express, Docker, CI/CD and cloud deployment",
               "Adding AI-powered features to the apps I build",
               "Freelance and remote development work"])]

SimpleDocTemplate("public/Peter-Resume.pdf", pagesize=A4, leftMargin=18*mm, rightMargin=18*mm,
                  topMargin=16*mm, bottomMargin=16*mm, title="Peter Ochieng - Resume", author="Peter Ochieng").build(s)
