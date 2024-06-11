const items = document.querySelectorAll('.questions__item ');
const textWrap = document.querySelectorAll('.questions__text-wrapp');
const svgIcons = document.querySelectorAll('.questions__svg');
const svgPurple = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="23" cy="23" r="22.5" stroke="#6C0287" />
<rect x="13" y="23" width="20" height="1" fill="#6C0287" />
</svg>;`;
const svgWhite = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="13" y="23" width="20" height="1" fill="white"/>
<circle cx="23" cy="23" r="22" stroke="white" stroke-width="2"/>
</svg>
`;

const svgPurpleDefault = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8305 14H23.5085V34H22.8305V14Z" fill="#6C0287"/>
<path d="M13 24.1695V23.4915H33V24.1695H13Z" fill="#6C0287"/>
<circle cx="23" cy="23" r="22.5" stroke="#6C0287"/>
</svg>
`;
const svgWhiteDefault = `<svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.8305 14H23.5085V34H22.8305V14Z" fill="white"/>
<path d="M13 24.1695V23.4915H33V24.1695H13Z" fill="white"/>
<circle cx="23" cy="23" r="22" stroke="white" stroke-width="2"/>
</svg>

`;

const setDefaultSVGIcons = () => {
  svgIcons.forEach((icon) => {
    icon.innerHTML = svgPurpleDefault;
  });
};

const setActiveSVGIcon = (index) => {
  svgIcons[index].innerHTML = svgPurple;
};

const resetSVGIcons = () => {
  svgIcons.forEach((icon) => {
    icon.innerHTML = svgPurpleDefault;
  });
};

const handleResize = () => {
  if (window.innerWidth <= 1090) {
    setDefaultSVGIcons();
  } else {
    items.forEach((btn, index) => {
      if (index % 2 === 0) {
        svgIcons[index].innerHTML = svgPurpleDefault;
      } else {
        svgIcons[index].innerHTML = svgWhiteDefault;
      }
    });
  }
};

export const accOpen = () => {
  items.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      textWrap.forEach((el, i) => {
        if (i !== index) {
          el.classList.remove('questions__item_actv');
          el.style.maxHeight = null;
          if (window.innerWidth > 1090) {
            if (i % 2 === 0) {
              svgIcons[i].innerHTML = svgPurpleDefault;
            } else {
              svgIcons[i].innerHTML = svgWhiteDefault;
            }
          } else {
            svgIcons[i].innerHTML = svgPurpleDefault;
          }
        }
      });

      const panel = textWrap[index];
      const isActive = panel.classList.toggle('questions__item_actv');
      if (isActive) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        if (window.innerWidth > 1090) {
          if (index % 2 === 0) {
            svgIcons[index].innerHTML = svgPurple;
          } else {
            svgIcons[index].innerHTML = svgWhite;
          }
        } else {
          svgIcons[index].innerHTML = svgPurple;
        }
      } else {
        panel.style.maxHeight = null;
        if (window.innerWidth > 1090) {
          if (index % 2 === 0) {
            svgIcons[index].innerHTML = svgPurpleDefault;
          } else {
            svgIcons[index].innerHTML = svgWhiteDefault;
          }
        } else {
          svgIcons[index].innerHTML = svgPurpleDefault;
        }
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.questions__item')) {
      textWrap.forEach((el, i) => {
        el.classList.remove('questions__item_actv');
        el.style.maxHeight = null;
        if (window.innerWidth > 1090) {
          if (i % 2 === 0) {
            svgIcons[i].innerHTML = svgPurpleDefault;
          } else {
            svgIcons[i].innerHTML = svgWhiteDefault;
          }
        } else {
          svgIcons[i].innerHTML = svgPurpleDefault;
        }
      });
    }
  });

  window.addEventListener('resize', handleResize);
  handleResize();
};

accOpen();
