# -*- coding: utf-8 -*-
from docx import Document
from docx.shared import Pt, Inches, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

ACCENT = RGBColor(0x0F, 0x9D, 0x63)
GOOD = RGBColor(0x0E, 0x9F, 0x5F)
GOLD = RGBColor(0xC4, 0x70, 0x00)
MUTED = RGBColor(0x4C, 0x6B, 0x61)
DARK = RGBColor(0x12, 0x24, 0x20)

doc = Document()

style = doc.styles["Normal"]
style.font.name = "Calibri"
style.font.size = Pt(11)
style.font.color.rgb = DARK


def set_cell_shading(cell, color_hex):
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), color_hex)
    cell._tc.get_or_add_tcPr().append(shd)


def add_box(doc_, title, body_lines, color=ACCENT):
    p = doc_.add_paragraph()
    p.paragraph_format.space_before = Pt(6)
    run = p.add_run(title)
    run.bold = True
    run.font.color.rgb = color
    for line in body_lines:
        bp = doc_.add_paragraph(line)
        bp.paragraph_format.left_indent = Inches(0.15)
    doc_.add_paragraph()


def add_recall(doc_, text):
    p = doc_.add_paragraph()
    run = p.add_run("FIXOU: ")
    run.bold = True
    run.font.color.rgb = GOOD
    p.add_run(text)
    p.paragraph_format.space_after = Pt(16)


def add_table(doc_, rows):
    table = doc_.add_table(rows=1, cols=len(rows[0]))
    table.style = "Light Grid Accent 1"
    hdr = table.rows[0].cells
    for i, h_ in enumerate(rows[0]):
        hdr[i].text = h_
    for row in rows[1:]:
        cells = table.add_row().cells
        for i, val in enumerate(row):
            cells[i].text = val
    doc_.add_paragraph()


# ---------- COVER ----------
title = doc.add_heading("Química Orgânica em 2 Horas", level=0)
title.alignment = WD_ALIGN_PARAGRAPH.CENTER
sub = doc.add_paragraph(
    "Reações, funções e mecanismos: guia de estudo com imagens mentais, "
    "exemplos concretos e um atalho mental"
)
sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
sub.runs[0].italic = True
sub.runs[0].font.color.rgb = MUTED
doc.add_paragraph()
info = doc.add_paragraph("7 módulos · ~15 min cada · 1 atalho mental · quiz online linkado ao final")
info.alignment = WD_ALIGN_PARAGRAPH.CENTER
info.runs[0].font.color.rgb = MUTED
doc.add_page_break()

# ---------- TOC ----------
doc.add_heading("Roteiro dos 120 minutos", level=1)
toc_items = [
    "1. Halogenação e estabilidade de radicais",
    "2. Oxidação e redução de compostos orgânicos",
    "3. Hidrólise de ésteres",
    "4. Ozonólise de alcenos",
    "5. Reconhecendo funções orgânicas",
    "6. Substituição eletrofílica aromática",
    "7. Classificando reações orgânicas",
    "8. Atalho mental: O Detetive das Reações",
    "9. Link do quiz online",
]
for it in toc_items:
    doc.add_paragraph(it, style="List Number")
doc.add_page_break()


def module(num, title_, tag, intro_paras, image_text, example_paras, compare_text, recall_text, compare_table=None):
    doc.add_heading(f"{num}. {title_}", level=1)
    tagp = doc.add_paragraph(tag)
    tagp.runs[0].italic = True
    tagp.runs[0].font.color.rgb = MUTED

    for para in intro_paras:
        doc.add_paragraph(para)

    add_box(doc, "Imagem mental", [image_text], ACCENT)
    add_box(doc, "Exemplo concreto", example_paras, GOOD)

    if compare_table:
        cp = doc.add_paragraph()
        cr = cp.add_run("Comparação simples")
        cr.bold = True
        cr.font.color.rgb = GOLD
        add_table(doc, compare_table)
    else:
        add_box(doc, "Comparação simples", [compare_text], GOLD)

    add_recall(doc, recall_text)
    doc.add_paragraph()


# Module 1
module(
    1, "Halogenação de alcanos e estabilidade de radicais",
    "Por que o halogênio \"escolhe\" um carbono específico para substituir o hidrogênio.",
    [
        "Na halogenação de um alcano (por exemplo, com Cl2 e luz), um hidrogênio é trocado por um halogênio "
        "através de um mecanismo de radical livre. A etapa decisiva é a formação de um radical intermediário — e "
        "radicais mais substituídos (terciários) são mais estáveis que secundários, que por sua vez são mais "
        "estáveis que primários (3º > 2º > 1º)."
    ],
    "Pense num carbono terciário como uma cadeira com três apoios de braço: ela distribui o peso (a instabilidade "
    "do elétron desemparelhado) em mais vizinhos, ficando mais firme. Um carbono primário é uma cadeira com um "
    "braço só. A reação prefere formar o radical na cadeira mais firme.",
    [
        "No 3-metil-pentano (CH3-CH2-CH(CH3)-CH2-CH3), o carbono 3 é terciário: ligado a dois grupos CH2 da "
        "cadeia, a um grupo metil e a apenas um hidrogênio. Ao substituir esse hidrogênio por cloro, forma-se o "
        "cloreto terciário CH3-CH2-C(Cl)(CH3)-CH2-CH3 — o produto preferencial.",
    ],
    "É como escolher onde amarrar uma rede entre árvores: você prefere o ponto com mais troncos ao redor para "
    "distribuir a tensão, não um galho fino e isolado.",
    "em halogenação por radical livre, o halogênio tende a substituir o hidrogênio do carbono mais substituído "
    "(terciário > secundário > primário), pois esse é o radical intermediário mais estável.",
)

# Module 2
module(
    2, "Oxidação e redução de compostos orgânicos",
    "A \"força\" do oxidante decide até onde a molécula é oxidada.",
    [
        "Oxidar, em química orgânica, normalmente significa aumentar as ligações com oxigênio (ou diminuir as "
        "ligações com hidrogênio). A intensidade do oxidante determina o produto final: um oxidante brando para "
        "antes de \"destruir\" a molécula; um oxidante forte e concentrado vai até o fim."
    ],
    "Pense em assar um bolo: calor brando cozinha por igual e para no ponto certo (oxidação branda). Calor muito "
    "forte e por tempo demais queima e desmancha o bolo (oxidação enérgica).",
    [
        "Dicromato de potássio concentrado em meio ácido é um oxidante forte: oxida álcoois primários diretamente "
        "a ácido carboxílico (passando pelo aldeído) e álcoois secundários a cetonas. Já um aldeído é tão fácil "
        "de oxidar que até reagentes fracos (Tollens, Fehling) já o convertem em ácido carboxílico — e, no "
        "sentido inverso, aldeídos são reduzidos a álcoois primários.",
    ],
    None,
    "álcool 1º vira aldeído (brando) ou ácido (forte); álcool 2º vira cetona e para por aí; aldeído é sempre "
    "fácil de oxidar a ácido, e fácil de reduzir a álcool 1º.",
    compare_table=[
        ["Substrato", "Oxidante brando", "Oxidante forte/concentrado"],
        ["Álcool primário", "Aldeído", "Ácido carboxílico"],
        ["Álcool secundário", "Cetona", "Cetona (não oxida mais)"],
        ["Aldeído", "Ácido carboxílico", "Ácido carboxílico"],
        ["Alcino interno", "1,2-diona (ex.: 2,3-pentanodiona)", "Ruptura total da tripla (ácidos)"],
    ],
)

# Module 3
module(
    3, "Hidrólise de ésteres",
    "Toda vez que um éster \"bebe água\", ele se quebra em dois pedaços reconhecíveis.",
    [
        "Na hidrólise de um éster, a água quebra a ligação entre o grupo acila e o oxigênio, regenerando um "
        "ácido carboxílico e um álcool (ou, no caso de um éster fenólico, um fenol/ácido no lugar do álcool)."
    ],
    "Pense no éster como duas peças de Lego grudadas por uma \"cola de água removida\" na formação. Jogar água "
    "de volta nessa junção é como molhar a cola: as duas peças se separam de volta às suas formas originais.",
    [
        "O ácido acetilsalicílico (aspirina) é um éster: o grupo acetila está ligado ao oxigênio fenólico do "
        "ácido salicílico. Ao ser hidrolisado no organismo, ele se quebra de volta em ácido salicílico e ácido "
        "acético (ácido etanoico) — a \"peça\" que havia sido usada para acetilar o fenol.",
    ],
    "É o oposto exato de fazer um sanduíche (esterificação: ácido + álcool se juntam, soltando água) e depois "
    "desmontá-lo (hidrólise: água entra, o sanduíche volta a ser pão e recheio separados).",
    "hidrólise de éster = sempre volta a um ácido carboxílico + um álcool (ou fenol). É a reação inversa da "
    "esterificação.",
)

# Module 4
module(
    4, "Ozonólise de alcenos",
    "A \"tesoura química\" que corta exatamente na dupla ligação.",
    [
        "A ozonólise usa ozônio (O3) para quebrar uma ligação dupla C=C ao meio, transformando cada lado em um "
        "grupo carbonila (C=O). Em condições redutoras (Zn/H2O), os produtos param em aldeídos e cetonas, sem "
        "seguir adiante até ácido carboxílico."
    ],
    "Imagine cortar um balão de aniversário comprido bem no meio com uma tesoura: cada metade ganha uma \"ponta "
    "fechada\" nova, exatamente onde o corte aconteceu. O zinco segura a tesoura com cuidado, parando o corte ali.",
    [
        "O 2-metil-pent-2-eno, H3C-C(CH3)=CH-CH2-CH3, tem a dupla entre o carbono 2 (dois grupos metil) e o "
        "carbono 3. A ozonólise redutiva corta nessa dupla: o lado do carbono 2 vira propanona (acetona, sem H "
        "para virar aldeído), e o lado do carbono 3 vira propanal.",
    ],
    "É como abrir um zíper bem no meio: um lado e outro se separam, mas cada lado ganha uma \"ponta\" nova e "
    "definida no ponto do corte.",
    "para prever os produtos da ozonólise, \"corte\" a dupla ligação e coloque um oxigênio em cada ponta. Carbono "
    "com 2 hidrogênios vira aldeído; carbono sem hidrogênio vira cetona.",
)

# Module 5
doc.add_heading("5. Reconhecendo funções orgânicas", level=1)
tagp = doc.add_paragraph("Identificar a função certa a partir da fórmula estrutural é metade da prova.")
tagp.runs[0].italic = True
tagp.runs[0].font.color.rgb = MUTED
doc.add_paragraph(
    "Muitas questões só pedem para você reconhecer o grupo funcional numa fórmula dada. Vale treinar o olho para "
    "os \"sinais\" característicos de cada função."
)
add_table(doc, [
    ["Exemplo do dia a dia", "Fórmula/trecho característico", "Função"],
    ["Gás de isqueiro", "H3C-CH2-CH2-CH3 (butano)", "Hidrocarboneto"],
    ["Solvente de gorduras em farmácia", "H3C-CH2-O-CH2-CH3 (sem carbonila)", "Éter"],
    ["Base de detergentes", "C12H25-C6H4-SO3H (grupo -SO3H)", "Ácido sulfônico"],
    ["Vinagre", "-COOH", "Ácido carboxílico"],
    ["Aspirina (ligação original)", "-COO- entre um ácido e um fenol/álcool", "Éster"],
])
add_box(doc, "Imagem mental", [
    "Pense em cada grupo funcional como uma \"placa de identificação\": o -O- isolado grita \"éter\"; o -SO3H "
    "grita \"ácido sulfônico\"; o -COOH grita \"ácido carboxílico\". Treinar é aprender a reconhecer essas placas "
    "rapidamente.",
], ACCENT)
add_box(doc, "Exemplo concreto", [
    "Numa questão com butano, dietil éter e um ácido sulfônico de cadeia longa, a resposta correta identifica as "
    "três funções, nessa ordem, como hidrocarboneto, éter e ácido sulfônico.",
], GOOD)
add_recall(doc, "decore o \"sinal\" de cada função (-OH álcool, -O- éter, -COOH ácido carboxílico, -COO- éster, "
                "-SO3H ácido sulfônico) antes de tentar identificar qualquer coisa na fórmula.")
doc.add_paragraph()

# Module 6
module(
    6, "Substituição eletrofílica aromática",
    "O anel benzênico não \"quebra\" a ligação dupla — ele troca um hidrogênio, preservando a aromaticidade.",
    [
        "Diferente dos alcenos (que fazem adição), o benzeno prefere substituição eletrofílica: um hidrogênio do "
        "anel é trocado por outro grupo, mantendo a aromaticidade intacta."
    ],
    "Pense no anel aromático como um time titular muito bem escalado. Trocar um \"jogador\" (hidrogênio) por "
    "outro grupo é aceitável; tirar o time inteiro de campo (quebrar o anel) não compensa.",
    [
        "Benzeno + CH3Cl (AlCl3) -> tolueno (alquilação de Friedel-Crafts). Benzeno + HNO3 conc. (H2SO4 conc.) "
        "-> nitrobenzeno (nitração). Benzeno + Cl2 (AlCl3) -> clorobenzeno (halogenação aromática).",
    ],
    "É a diferença entre trocar um parafuso de uma estrutura (substituição) e desmontar a armação inteira "
    "(adição). O anel aromático sempre escolhe \"trocar o parafuso\".",
    "alquilação (Friedel-Crafts) dá alquilbenzeno; nitração dá nitrobenzeno; halogenação (com AlCl3) dá "
    "halobenzeno — todas são substituições eletrofílicas que preservam o anel.",
)

# Module 7
doc.add_heading("7. Classificando reações orgânicas", level=1)
tagp = doc.add_paragraph("Cinco categorias resolvem praticamente qualquer questão de \"que tipo de reação é "
                          "essa?\".")
tagp.runs[0].italic = True
tagp.runs[0].font.color.rgb = MUTED
add_table(doc, [
    ["Tipo", "O que acontece", "Exemplo"],
    ["Substituição", "Um átomo/grupo é trocado por outro", "Benzeno + Cl2 -> clorobenzeno + HCl"],
    ["Adição", "Dois reagentes se unem, incorporando átomos", "CH2=CH2 + H2 -> CH3-CH3"],
    ["Eliminação", "Retirada de átomos, geralmente formando dupla", "CH3CH2OH -> CH2=CH2 + H2O"],
    ["Hidrólise", "Água participa da quebra de uma ligação", "Éster + H2O -> ácido + álcool"],
    ["Oxirredução", "Transferência de elétrons entre espécies", "Zn + CuSO4 -> ZnSO4 + Cu"],
])
add_box(doc, "Imagem mental", [
    "Pense nessas cinco categorias como cinco verbos de uma dança de casal: trocar de par (substituição), chamar "
    "alguém a mais (adição), deixar alguém de fora (eliminação), separar-se com ajuda de um terceiro — a água "
    "(hidrólise), e passar um objeto de mão em mão — os elétrons (oxirredução).",
], ACCENT)
add_box(doc, "Exemplo concreto: Zn + CuSO4 -> ZnSO4 + Cu", [
    "O zinco metálico (Zn0) perde 2 elétrons e vira Zn2+ — sofre oxidação. O cobre, que estava como Cu2+, ganha "
    "esses elétrons e vira Cu0 metálico — sofre redução. É por isso que, ao mergulhar um prego de zinco numa "
    "solução azul de sulfato de cobre, a solução perde a cor e cobre metálico se deposita no prego.",
], GOOD)
add_recall(doc, "se a questão fala em \"perde/ganha elétrons\", é oxirredução; \"água quebrando a ligação\", é "
                "hidrólise; \"forma dupla retirando algo\", é eliminação; \"dois viram um só, saturando a "
                "ligação\", é adição; \"um átomo sai, outro entra\", é substituição.")
doc.add_paragraph()
doc.add_page_break()

# ---------- MNEMONIC ----------
doc.add_heading("8. Atalho mental: \"O Detetive das Reações\"", level=1)
doc.add_paragraph("Para lembrar de tudo acima em 10 segundos, imagine esta historinha sempre que ler uma questão "
                   "de reação orgânica:")

story = [
    ("🔥⚛️ O radical procura conforto:", "na halogenação, o halogênio sempre entra onde o radical fica mais "
     "confortável — no carbono mais substituído (terciário > secundário > primário)."),
    ("🔥➡️🧊 A força do oxidante decide o destino:", "oxidante brando para no meio do caminho (álcool 1º -> "
     "aldeído); oxidante forte vai até o fim (álcool 1º -> ácido). Aldeído é sempre fácil de oxidar."),
    ("💧🧩 A água desmonta ésteres:", "hidrólise sempre devolve um ácido carboxílico e um álcool (ou fenol) — o "
     "oposto exato da esterificação."),
    ("✂️💍 O ozônio corta na dupla, o anel nunca quebra:", "ozonólise fatia exatamente a ligação dupla (virando "
     "aldeídos/cetonas); já o benzeno prefere sempre trocar um hidrogênio a abrir seu anel estável."),
    ("🕵️‍♀️🔁 No final, pergunte \"o que mudou?\":", "trocou átomo = substituição; juntou sem sobrar nada = "
     "adição; sobrou algo e formou dupla = eliminação; água quebrou = hidrólise; elétron mudou de dono = "
     "oxirredução."),
]
for lead, rest in story:
    p = doc.add_paragraph()
    r1 = p.add_run(lead + " ")
    r1.bold = True
    r1.font.color.rgb = ACCENT
    p.add_run(rest)

doc.add_paragraph()
add_recall(doc, "\"O radical busca conforto, o oxidante decide até onde vai, a água desmonta ésteres, o ozônio "
                "corta na dupla, o anel nunca abre — e no fim, é sempre uma questão de o que mudou na molécula.\"")

doc.add_page_break()

# ---------- QUIZ LINK ----------
doc.add_heading("9. Quiz online", level=1)
doc.add_paragraph(
    "O quiz inteligente com 16 perguntas, correção automática, explicação dos erros e exemplos extras está "
    "disponível online:"
)
linkp = doc.add_paragraph()
lr1 = linkp.add_run("Guia de estudo: ")
lr1.bold = True
linkp.add_run("https://quimicagta.vercel.app/")
linkp2 = doc.add_paragraph()
lr2 = linkp2.add_run("Quiz: ")
lr2.bold = True
linkp2.add_run("https://quimicagta.vercel.app/quiz.html")
doc.add_paragraph()
p = doc.add_paragraph()
r = p.add_run("Dica: ")
r.bold = True
p.add_run("faça o quiz logo após terminar de ler este guia, enquanto o conteúdo ainda está fresco. Erros no quiz "
          "indicam exatamente qual módulo deste documento você deve reler.")

doc.save("Quimica_Guia_de_Estudo.docx")
print("OK: Quimica_Guia_de_Estudo.docx gerado")
