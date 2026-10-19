from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor

target = Path(__file__).parent / 'assets' / 'Joao_Pedro_Lessa_Curriculo_Teste.pdf'
c = canvas.Canvas(str(target), pagesize=A4)
c.setTitle('Currículo de teste — João Pedro Lessa')
w, h = A4
c.setFillColor(HexColor('#f1ecfa'))
c.rect(40, h-92, w-80, 43, fill=1, stroke=0)
c.setFillColor(HexColor('#55327d'))
c.setFont('Helvetica-Bold', 13)
c.drawString(55, h-75, 'DOCUMENTO DE TESTE — NÃO É O CURRÍCULO FINAL')
c.setFillColor(HexColor('#17151c'))
c.setFont('Helvetica-Bold', 25)
c.drawString(50, h-143, 'João Pedro Lessa')
c.setFont('Helvetica', 13)
c.drawString(50, h-169, 'Desenvolvedor de Software | Backend Python')
c.setFont('Helvetica', 10)
lines = [
 'Este PDF foi gerado exclusivamente para testar a visualização e o download',
 'do currículo no portfólio. Substitua-o pelo documento profissional atualizado.',
 '',
 'Contato: joaopedro.lessa@outlook.com',
 'GitHub: github.com/joaopedrolessa',
 'LinkedIn: linkedin.com/in/joaopedrolessa/',
 '',
 'Foco profissional: APIs REST, automação e tratamento de dados com Python.',
 'Experiência: Dataprev — estágio de TI entre outubro/2023 e outubro/2025.',
 'Produto próprio: VetDash — SaaS para gestão veterinária em produção.',
 'Projeto público: AI Sales Assistant — Python, FastAPI e arquitetura RAG.',
 '',
 'Arquivo demonstrativo. Não utilizar em candidaturas.',
]
text = c.beginText(50, h-215)
text.setLeading(20)
for line in lines:
 text.textLine(line)
c.drawText(text)
c.setStrokeColor(HexColor('#ddd7e5'))
c.line(50, 65, w-50, 65)
c.setFont('Helvetica', 9)
c.setFillColor(HexColor('#6c6377'))
c.drawString(50, 45, 'Portfólio de João Pedro Lessa — PDF de teste')
c.showPage()
c.save()
print(target)
