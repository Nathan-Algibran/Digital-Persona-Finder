let lastResult = "";

function findPersona(e){
  const name = document.getElementById('name').value.trim().toUpperCase();
  const selectedHobby = document.getElementById("hobbySelect").value;
  const customHobby = document.getElementById("customHobby").value.trim();

  const hobby = selectedHobby === "other"
    ? customHobby.toLowerCase()
    : selectedHobby.toLowerCase();
  const num = parseInt(document.getElementById('number').value);
  const result = document.getElementById('result');

  if(!name || !hobby || !num || num < 1 || num > 10){
    result.innerHTML="⚠️ Lengkapi data dengan benar";
    return;
  }

  let persona = "";
  let desc = "";

  if(hobby.includes("coding")){
    if(num >= 7){
      persona = "The Tech Innovator";
      desc = "A highly analytical individual with exceptional problem-solving abilities, capable of designing complex systems, writing efficient code, and driving innovation at a high level of technical mastery.";
    }else if(num >= 4){
      persona = "The Logical Thinker";
      desc = "A structured and logical mind that enjoys breaking down problems into smaller parts and finding efficient solutions through reasoning and systematic thinking.";
    }else{
      persona = "The Curious Coder";
      desc = "A beginner-minded explorer in the tech world who is still learning fundamentals of programming and enjoys experimenting with basic logic and simple projects.";
    }
  }

  else if(hobby.includes("design")){
    if(num >= 7){
      persona = "The Master Designer";
      desc = "A highly creative visual expert who blends aesthetics and functionality perfectly, capable of producing professional-level UI/UX and artistic compositions.";
    }else if(num >= 4){
      persona = "The Creative Designer";
      desc = "A visual thinker who understands basic design principles and enjoys creating clean and attractive visual layouts with growing creativity.";
    }else{
      persona = "The Design Explorer";
      desc = "A beginner in visual creativity who enjoys experimenting with colors, shapes, and basic design ideas.";
    }
  }

  else if(hobby.includes("music")){
    if(num >= 7){
      persona = "The Sound Virtuoso";
      desc = "A highly expressive and emotionally intelligent individual with deep understanding of rhythm, melody, and artistic storytelling through sound.";
    }else if(num >= 4){
      persona = "The Creative Soul";
      desc = "A person who enjoys expressing emotions through music and appreciates harmony, rhythm, and artistic expression.";
    }else{
      persona = "The Rhythm Learner";
      desc = "A beginner in music who enjoys listening and exploring sounds while slowly developing musical sensitivity.";
    }
  }

    else if(hobby.includes("gaming")){
        if(num >= 7){
        persona = "The Strategic Gamer";
        desc = "A highly competitive and strategic individual with excellent decision-making skills, fast reflexes, and the ability to adapt quickly under pressure.";
        }else if(num >= 4){
        persona = "The Skillful Player";
        desc = "A passionate gamer who enjoys challenges, teamwork, and improving skills through experience and consistency.";
        }else{
        persona = "The Casual Explorer";
        desc = "A relaxed player who enjoys gaming for entertainment, exploration, and fun experiences.";
        }
    }

    else if(hobby.includes("reading")){
        if(num >= 7){
        persona = "The Knowledge Seeker";
        desc = "A highly intellectual and curious individual who loves gaining deep insights, exploring ideas, and expanding knowledge through reading.";
        }else if(num >= 4){
        persona = "The Thoughtful Reader";
        desc = "A reflective person who enjoys stories, information, and learning from books and written content.";
        }else{
        persona = "The Curious Beginner";
        desc = "Someone who is starting to develop a habit of reading and enjoys discovering new perspectives.";
        }
    }

    else if(hobby.includes("studying")){
        if(num >= 7){
        persona = "The Academic Achiever";
        desc = "A highly disciplined learner with strong focus, ambition, and dedication toward academic excellence and self-improvement.";
        }else if(num >= 4){
        persona = "The Focused Learner";
        desc = "A committed student who values growth, discipline, and continuous learning.";
        }else{
        persona = "The Developing Scholar";
        desc = "A learner who is building consistency and improving study habits step by step.";
        }
    }

    else if(hobby.includes("drawing")){
        if(num >= 7){
        persona = "The Artistic Visionary";
        desc = "A highly imaginative individual with exceptional artistic creativity and the ability to express ideas visually in unique ways.";
        }else if(num >= 4){
        persona = "The Creative Illustrator";
        desc = "A creative person who enjoys expressing thoughts and emotions through sketches and visual art.";
        }else{
        persona = "The Sketch Explorer";
        desc = "A beginner artist who enjoys experimenting with shapes, lines, and simple creative drawings.";
        }
    }

  else{
    if(num >= 7){
      persona = "The Visionary Explorer";
      desc = "A highly curious and forward-thinking individual who constantly explores new ideas, opportunities, and innovative possibilities beyond conventional limits.";
    }else if(num >= 4){
      persona = "The Curious Mind";
      desc = "An open-minded learner who enjoys discovering new knowledge and exploring different fields of interest.";
    }else{
      persona = "The Silent Observer";
      desc = "A reflective personality who prefers observing, analyzing situations quietly, and learning from the environment.";
    }
  }

  lastResult = `${name} - ${persona}`;

  const output =
`Nama: ${name}
Persona:  ${persona}
Deskripsi: ${desc}`;

  result.style.whiteSpace = "pre-line";
  typeWriter(result, output);
}

function typeWriter(el, text){
  el.innerHTML="";
  let i=0;
  const speed=20;

  function typing(){
    if(i<text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing,speed);
    }
  }

  typing();
}

function toggleCustomHobby(){
  const select = document.getElementById("hobbySelect");
  const customInput = document.getElementById("customHobby");

  if(select.value === "other"){
    customInput.style.display = "block";
  }else{
    customInput.style.display = "none";
    customInput.value = "";
  }
}

const arcanas = [
  {
    name: "The Fool",
    symbol: "🃏",
    desc: "Represents new beginnings, spontaneity, and limitless potential.",
    image: "tarot/fool.jpg"
  },
  {
    name: "The Magician",
    symbol: "✨",
    desc: "Symbolizes skill, intelligence, and mastery of ability.",
    image: "tarot/magician.jpg"
  },
  {
    name: "The Hierophant",
    symbol: "📚",
    desc: "Represents wisdom, knowledge, and structured learning.",
    image: "tarot/hierophant.jpg"
  },
  {
    name: "The Emperor",
    symbol: "👑",
    desc: "A symbol of leadership, authority, and discipline.",
    image: "tarot/emperor.jpg"
  },
  {
    name: "The Star",
    symbol: "⭐",
    desc: "Represents hope, inspiration, and future ambition.",
    image: "tarot/star.jpg"
  },
  {
    name: "The Moon",
    symbol: "🌙",
    desc: "Symbolizes intuition, mystery, and imagination.",
    image: "tarot/moon.jpg"
  },
  {
    name: "Justice",
    symbol: "⚖️",
    desc: "Represents fairness, logic, and truth.",
    image: "tarot/justice.jpg"
  }
];

function getRandomArcana(){
  return arcanas[Math.floor(Math.random() * arcanas.length)];
}

function exportPDF(){
  const name = document.getElementById("name").value || "Unknown User";
  const hobby = document.getElementById("hobbySelect").value || "-";
  const number = document.getElementById("number").value || "-";
  const resultText = document.getElementById("result").innerText || "No result generated";

  const arcana = getRandomArcana();

  const pdfContent = `
    <div style="
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f172a, #1e3a8a, #38bdf8);
      color: white;
      min-height: 100vh;
      padding: 35px;
      position: relative;
    ">

      <!-- Glow Accent -->
      <div style="
        position:absolute;
        top:20px;
        right:20px;
        width:180px;
        height:180px;
        background: rgba(56,189,248,0.25);
        border-radius:50%;
        filter: blur(60px);
      "></div>

      <div style="position:relative; z-index:2;">

        <!-- Header -->
        <div style="
          padding:18px 24px;
          border-radius:14px;
          background: rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.25);
          box-shadow: 0 8px 20px rgba(0,0,0,0.25);
        ">
          <h1 style="
            margin:0;
            font-size:30px;
            text-transform:uppercase;
            letter-spacing:2px;
            color:#e0f2fe;
          ">
            Persona Analysis Report
          </h1>

          <p style="
            margin-top:8px;
            color:#bae6fd;
            font-size:14px;
            letter-spacing:1px;
          ">
            Digital Identity • Arcana Synchronization
          </p>
        </div>

        <!-- User Status -->
        <div style="
          margin-top:30px;
          padding:20px;
          border-radius:14px;
          background: rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.2);
          box-shadow:0 6px 16px rgba(0,0,0,0.2);
        ">
          <h2 style="
            margin-top:0;
            color:#e0f2fe;
          ">
            User Status
          </h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Hobby:</strong> ${hobby}</p>
          <p><strong>Lucky Number:</strong> ${number}</p>
        </div>

        <!-- Arcana Card -->
        <div style="
          margin-top:25px;
          padding:20px;
          border-radius:16px;
          background: rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.25);
          box-shadow:0 6px 16px rgba(0,0,0,0.25);
        ">
          <h2 style="
            margin:0;
            font-size:22px;
            color:#e0f2fe;
          ">
            Arcana Assigned
          </h2>

          <div style="
            display:flex;
            align-items:center;
            gap:20px;
            margin-top:15px;
          ">
            <img src="${arcana.image}" style="
              width:110px;
              height:auto;
              border-radius:12px;
              border:2px solid rgba(255,255,255,0.4);
              box-shadow:0 6px 14px rgba(0,0,0,0.3);
            ">

            <div>
              <p style="
                font-size:28px;
                margin:0 0 8px 0;
                font-weight:bold;
                color:#f0f9ff;
              ">
                ${arcana.symbol} ${arcana.name}
              </p>

              <p style="
                font-size:14px;
                line-height:1.7;
                color:#dbeafe;
                margin:0;
              ">
                ${arcana.desc}
              </p>
            </div>
          </div>
        </div>

        <!-- Persona Analysis -->
        <div style="
          margin-top:25px;
          padding:24px;
          border-radius:16px;
          background: rgba(255,255,255,0.08);
          border:1px solid rgba(255,255,255,0.2);
          box-shadow:0 6px 16px rgba(0,0,0,0.2);
        ">
          <h2 style="
            margin-top:0;
            color:#e0f2fe;
          ">
            Persona Analysis
          </h2>

          <p style="
            white-space:pre-line;
            line-height:1.8;
            font-size:15px;
            color:#f8fafc;
          ">
            ${resultText}
          </p>
        </div>

        <!-- Footer -->
        <div style="
          margin-top:40px;
          text-align:right;
          color:#bae6fd;
          font-size:12px;
        ">
          Generated by Persona Finder PRO • 2026
        </div>
      </div>
    </div>
  `;

  const opt = {
    margin: 0,
    filename: `${name}-persona-report.pdf`,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: 'in',
      format: 'a4',
      orientation: 'portrait'
    }
  };

  html2pdf().set(opt).from(pdfContent).save();
}