(()=>{"use strict";function t(t,n){!function(t,o){const n=document.querySelectorAll(".nav__todo-lists")[0];n.querySelectorAll(".nav__todo-lists__li"),n.innerHTML="";for(var s=0;s<t.length;s++){const e=document.createElement("li");e.setAttribute("class","nav__todo-lists__li"),e.setAttribute("data-todo-list",`${s}`),e.textContent=`${t[s].name}`,t[s]==t[o]&&(e.style.fontWeight="bold"),n.appendChild(e)}e("Add new","nav__add-new",n)}(t,n),o(t,n),function(t){document.querySelectorAll(".main__delete")[0],0==t?(document.querySelectorAll(".main__delete")[0].classList.add("display-none"),document.querySelectorAll(".main__delete")[0].setAttribute("data-todo-list",`${t}`)):(document.querySelectorAll(".main__delete")[0].classList.remove("display-none"),document.querySelectorAll(".main__delete")[0].setAttribute("data-todo-list",`${t}`))}(n)}function e(t,o,n){const s=document.createElement("button");return s.setAttribute("class",o),s.textContent=`${t}`,n.appendChild(s),e}function o(t,e){n(".main__table__row"),n(".main__table__title__finished"),function(t,e){document.querySelectorAll(".main__top__title")[0].textContent=`${t[e].name}`}(t,e);for(var o=0;o<t[e].todos.length;o++)if(0==t[e].todos[o].finished){const n=document.querySelectorAll(".main__table")[0],s=document.createElement("li");s.setAttribute("class","main__table__row");const a=document.createElement("div");a.setAttribute("class","main__table__column-0");const i=document.createElement("img");i.setAttribute("src","img/checkbox-blank.svg"),i.setAttribute("class","main__checkbox"),i.setAttribute("data-todo-list",`${e}`),i.setAttribute("data-todo",`${o}`);const d=document.createElement("div");d.textContent=`${t[e].todos[o].title}`,d.setAttribute("class","main__table__column-1"),d.setAttribute("data-todo-list",`${e}`),d.setAttribute("data-todo",`${o}`);const l=document.createElement("div");l.textContent=`${t[e].todos[o].dueDate}`,l.setAttribute("class","main__table__column-2"),l.setAttribute("data-todo-list",`${e}`),l.setAttribute("data-todo",`${o}`);const c=document.createElement("div");c.textContent=`${t[e].todos[o].priority}`,c.setAttribute("class","main__table__column-3"),c.setAttribute("data-todo-list",`${e}`),c.setAttribute("data-todo",`${o}`),n.appendChild(s),s.appendChild(a),a.appendChild(i),s.appendChild(d),s.appendChild(l),s.appendChild(c)}if(t[e].todos.some((t=>1==t.finished))){const t=document.querySelectorAll(".main__table")[0],e=document.createElement("p");e.classList.add("main__table__title__finished"),e.textContent="Finished:",t.appendChild(e)}for(o=0;o<t[e].todos.length;o++)if(1==t[e].todos[o].finished){const n=document.querySelectorAll(".main__table")[0],s=document.createElement("li");s.setAttribute("class","main__table__row"),s.classList.add("main__table__row--finished");const a=document.createElement("div");a.setAttribute("class","main__table__column-0");const i=document.createElement("img");i.setAttribute("src","img/checkbox.svg"),i.setAttribute("class","main__checkbox"),i.setAttribute("data-todo-list",`${e}`),i.setAttribute("data-todo",`${o}`);const d=document.createElement("div");d.textContent=`${t[e].todos[o].title}`,d.setAttribute("class","main__table__column-1"),d.setAttribute("data-todo-list",`${e}`),d.setAttribute("data-todo",`${o}`);const l=document.createElement("div");l.textContent=`${t[e].todos[o].dueDate}`,l.setAttribute("class","main__table__column-2"),l.setAttribute("data-todo-list",`${e}`),l.setAttribute("data-todo",`${o}`);const c=document.createElement("div");c.textContent=`${t[e].todos[o].priority}`,c.setAttribute("class","main__table__column-3"),c.setAttribute("data-todo-list",`${e}`),c.setAttribute("data-todo",`${o}`),n.appendChild(s),s.appendChild(a),a.appendChild(i),s.appendChild(d),s.appendChild(l),s.appendChild(c)}document.getElementById("table")}function n(t){document.querySelectorAll(t).forEach((t=>{t.remove()}))}function s(){document.getElementsByClassName("modal")[0].classList.add("display-none")}class a{constructor(t){this.name=t,this.todos=[],i.push(this)}}const i=[];new a("Default JS"),new a("JS list 2");class d{constructor(t,e,o,n,s,a){this.title=t,this.description=e,this.dueDate=o,this.priority=n,this.notes=s,this.finished=!1,i[a].todos.push(this)}}new d("Title 1","Description","Due date","Priority","Notes",0),new d("Title 2","Description 2","Due date 2","Priority 2","Notes 2",0),new d("Title 3","Description 3","Due date 3","Priority 3","Notes 3",1),window.onload=function(){t(i,0)},document.getElementsByClassName("nav__todo-lists")[0].addEventListener("click",(e=>{if("LI"==e.target.nodeName){const o=e.target.getAttribute("data-todo-list");t(i,o)}})),document.getElementsByClassName("main__delete")[0].addEventListener("click",(e=>{const o=e.target.getAttribute("data-todo-list");confirm(`Are you sure you want to delete ${i[o].name}`)&&(i.splice(o),t(i,0))})),document.getElementsByClassName("main__table")[0].addEventListener("click",(function(t){if("main__checkbox"==t.target.classList.value){const e=t.target.attributes["data-todo-list"].value,n=t.target.attributes["data-todo"].value;!function(t,e,n){document.getElementsByClassName("main__checkbox")[n],document.getElementsByClassName("main__table__row")[n],0==t[e].todos[n].finished?t[e].todos[n].finished=!0:1==t[e].todos[n].finished&&(t[e].todos[n].finished=!1),o(t,e)}(i,e,n)}})),document.getElementsByClassName("main__table")[0].addEventListener("click",(function(t){if("main__table__column-1"==t.target.classList.value){const e=t.target.attributes["data-todo-list"].value,o=t.target.attributes["data-todo"].value;!function(t,e,o){document.getElementsByClassName("modal")[0].classList.remove("display-none"),function(t,e,o){let n=document.getElementsByClassName("modal__window__title")[0],s=document.getElementsByClassName("modal__window__description")[0],a=document.getElementsByClassName("modal__window__due-date")[0],i=document.getElementsByClassName("modal__window__priority")[0],d=document.getElementsByClassName("modal__window__notes")[0];n.textContent=`${t[e].todos[o].title}`,s.textContent=`${t[e].todos[o].description}`,a.textContent=`${t[e].todos[o].dueDate}`,i.textContent=`${t[e].todos[o].priority}`,d.textContent=`${t[e].todos[o].notes}`}(t,e,o)}(i,e,o)}})),document.getElementsByClassName("modal__window__close")[0].addEventListener("click",(function(t){s()})),document.getElementsByClassName("modal")[0].addEventListener("click",(function(t){s()})),document.getElementsByClassName("modal__window")[0].addEventListener("click",(t=>t.stopPropagation()))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFjLEdBQUdYLEVBQWNDLEdBQVk0QixNQUFNcUMsR0FBUWIsY0FDckVmLEVBQVEzQixZQUFjLEdBQUdYLEVBQWNDLEdBQVk0QixNQUFNcUMsR0FBUTVCLFVBQ2pFRSxFQUFTN0IsWUFBYyxHQUFHWCxFQUFjQyxHQUFZNEIsTUFBTXFDLEdBQVExQixXQUNsRWMsRUFBTTNDLFlBQWMsR0FBR1gsRUFBY0MsR0FBWTRCLE1BQU1xQyxHQUFRWixPQUNuRSxDQWhCSWMsQ0FBZXBFLEVBQWVDLEVBQVlpRSxFQUM5QyxDQ3pIUUcsQ0FBWXJFLEVBQWVDLEVBQVlpRSxFQUMzQyxDQUNILElBR0QvRCxTQUFTNEMsdUJBQXVCLHdCQUF3QixHQUFHVSxpQkFBaUIsU0FBUSxTQUFTQyxHQUN6RlosR0FDSixJQUdBM0MsU0FBUzRDLHVCQUF1QixTQUFTLEdBQUdVLGlCQUFpQixTQUFTLFNBQVNDLEdBQzNFWixHQUNKLElBR0EzQyxTQUFTNEMsdUJBQXVCLGlCQUFpQixHQUFHVSxpQkFBaUIsU0FBU0MsR0FBU0EsRUFBTVksbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWZyZXNoIGFsbCBiYXNlZCBvbiB0b2RvIGxpc3RzIGFuZCB0b2Rvc1xuZnVuY3Rpb24gcmVmcmVzaEFsbCh0b2RvTGlzdEFycmF5LCB0b2RvTGlzdE5vKSB7XG4gICAgcmVmcmVzaE5hdih0b2RvTGlzdEFycmF5LCB0b2RvTGlzdE5vKVxuICAgIHJlZnJlc2hNYWluKHRvZG9MaXN0QXJyYXksIHRvZG9MaXN0Tm8pO1xuICAgIG1vZGlmeURlbGV0ZUJ0bih0b2RvTGlzdE5vKTtcbn07XG5cbi8vIHJlZnJlc2ggbmF2XG5mdW5jdGlvbiByZWZyZXNoTmF2KHRvZG9MaXN0QXJyYXksIHRvZG9MaXN0Tm8pIHtcbiAgICBjb25zdCBwYXJlbnRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2X190b2RvLWxpc3RzXCIpWzBdO1xuICAgIGNvbnN0IGNoaWxkRWwgPSBwYXJlbnRFbC5xdWVyeVNlbGVjdG9yQWxsKFwiLm5hdl9fdG9kby1saXN0c19fbGlcIilcblxuICAgIHBhcmVudEVsLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvZG9MaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgY2hpbGRFbC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdl9fdG9kby1saXN0c19fbGlcIik7XG4gICAgICAgIGNoaWxkRWwuc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWxpc3RcIixgJHtpfWApO1xuICAgICAgICBjaGlsZEVsLnRleHRDb250ZW50ID0gYCR7dG9kb0xpc3RBcnJheVtpXS5uYW1lfWA7XG5cbiAgICAgICAgaWYgKHRvZG9MaXN0QXJyYXlbaV0gPT0gdG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXSkge1xuICAgICAgICAgICAgY2hpbGRFbC5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG4gICAgICAgIH07XG5cbiAgICAgICAgcGFyZW50RWwuYXBwZW5kQ2hpbGQoY2hpbGRFbCk7XG4gICAgfTtcbiAgICBcbmNyZWF0ZUJ0bihcIkFkZCBuZXdcIiwgXCJuYXZfX2FkZC1uZXdcIiwgcGFyZW50RWwpXG59O1xuXG4vLyBjcmVhdGUgYnV0dG9uIFxuZnVuY3Rpb24gY3JlYXRlQnRuKHRleHQsIGNsYXNzTmFtZSwgcGFyZW50KSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2xhc3NOYW1lKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSBgJHt0ZXh0fWA7XG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICByZXR1cm4gY3JlYXRlQnRuO1xufTtcblxuLy8gY3JlYXRlIHRvZG8gdGFibGVcbmZ1bmN0aW9uIHJlZnJlc2hNYWluKHRvZG9MaXN0QXJyYXksIHRvZG9MaXN0Tm8pIHtcbiAgICByZW1vdmVFbGVtZW50cyhcIi5tYWluX190YWJsZV9fcm93XCIpOyBcbiAgICByZW1vdmVFbGVtZW50cyhcIi5tYWluX190YWJsZV9fdGl0bGVfX2ZpbmlzaGVkXCIpXG4gICAgYWRkTWFpblRpdGxlKHRvZG9MaXN0QXJyYXksIHRvZG9MaXN0Tm8pXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gaWYgdG9kbyBpcyBub3QgZmluaXNoZWRcbiAgICAgICAgaWYgKHRvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbaV0uZmluaXNoZWQgPT0gZmFsc2UpIHsgXG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fdGFibGVcIilbMF07IFxuICAgICAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5fX3RhYmxlX19yb3dcIilcblxuICAgICAgICAgICAgY29uc3QgZGl2MCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbl9fdGFibGVfX2NvbHVtbi0wXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCJpbWcvY2hlY2tib3gtYmxhbmsuc3ZnXCIpO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluX19jaGVja2JveFwiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShgZGF0YS10b2RvLWxpc3RgLGAke3RvZG9MaXN0Tm99YCk7XG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoYGRhdGEtdG9kb2AsYCR7aX1gKTtcblxuICAgICAgICAgICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYxLnRleHRDb250ZW50ID0gYCR7dG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXS50b2Rvc1tpXS50aXRsZX1gO1xuICAgICAgICAgICAgZGl2MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5fX3RhYmxlX19jb2x1bW4tMVwiKTtcbiAgICAgICAgICAgIGRpdjEuc2V0QXR0cmlidXRlKGBkYXRhLXRvZG8tbGlzdGAsYCR7dG9kb0xpc3ROb31gKTtcbiAgICAgICAgICAgIGRpdjEuc2V0QXR0cmlidXRlKGBkYXRhLXRvZG9gLGAke2l9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2Mi50ZXh0Q29udGVudCA9IGAke3RvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbaV0uZHVlRGF0ZX1gO1xuICAgICAgICAgICAgZGl2Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5fX3RhYmxlX19jb2x1bW4tMlwiKTtcbiAgICAgICAgICAgIGRpdjIuc2V0QXR0cmlidXRlKGBkYXRhLXRvZG8tbGlzdGAsYCR7dG9kb0xpc3ROb31gKTtcbiAgICAgICAgICAgIGRpdjIuc2V0QXR0cmlidXRlKGBkYXRhLXRvZG9gLGAke2l9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgZGl2My50ZXh0Q29udGVudCA9IGAke3RvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbaV0ucHJpb3JpdHl9YDtcbiAgICAgICAgICAgIGRpdjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluX190YWJsZV9fY29sdW1uLTNcIik7XG4gICAgICAgICAgICBkaXYzLnNldEF0dHJpYnV0ZShgZGF0YS10b2RvLWxpc3RgLGAke3RvZG9MaXN0Tm99YCk7XG4gICAgICAgICAgICBkaXYzLnNldEF0dHJpYnV0ZShgZGF0YS10b2RvYCxgJHtpfWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YWJsZS5hcHBlbmRDaGlsZChsaSk7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYwKTtcbiAgICAgICAgICAgIGRpdjAuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gaWYgb25lIG9yIG1vcmUgdG9kb3MgYXJlIGZpbmlzaGVkXG4gICAgICAgIGlmICh0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zLnNvbWUoZSA9PiBlLmZpbmlzaGVkID09IHRydWUpKSB7XG4gICAgICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fdGFibGVcIilbMF07IFxuXG4gICAgICAgICAgICBjb25zdCBmaW5pc2hlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgZmluaXNoZWQuY2xhc3NMaXN0LmFkZChcIm1haW5fX3RhYmxlX190aXRsZV9fZmluaXNoZWRcIik7XG4gICAgICAgICAgICBmaW5pc2hlZC50ZXh0Q29udGVudCA9IFwiRmluaXNoZWQ6XCI7XG5cbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGZpbmlzaGVkKTtcbiAgICAgICAgfTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXS50b2Rvcy5sZW5ndGg7IGkrKykge1xuICAgICAgIC8vIGlmIHRvZG8gaXMgbm90IGZpbmlzaGVkXG4gICAgICAgIGlmICh0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zW2ldLmZpbmlzaGVkID09IHRydWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX190YWJsZVwiKVswXTsgXG5cbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluX190YWJsZV9fcm93XCIpO1xuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcIm1haW5fX3RhYmxlX19yb3ctLWZpbmlzaGVkXCIpO1xuXG4gICAgICAgICAgICBjb25zdCBkaXYwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdjAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYWluX190YWJsZV9fY29sdW1uLTBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcImltZy9jaGVja2JveC5zdmdcIik7XG4gICAgICAgICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5fX2NoZWNrYm94XCIpO1xuICAgICAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKGBkYXRhLXRvZG8tbGlzdGAsYCR7dG9kb0xpc3ROb31gKTtcbiAgICAgICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShgZGF0YS10b2RvYCxgJHtpfWApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBkaXYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGRpdjEudGV4dENvbnRlbnQgPSBgJHt0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zW2ldLnRpdGxlfWA7XG4gICAgICAgICAgICBkaXYxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbl9fdGFibGVfX2NvbHVtbi0xXCIpO1xuICAgICAgICAgICAgZGl2MS5zZXRBdHRyaWJ1dGUoYGRhdGEtdG9kby1saXN0YCxgJHt0b2RvTGlzdE5vfWApO1xuICAgICAgICAgICAgZGl2MS5zZXRBdHRyaWJ1dGUoYGRhdGEtdG9kb2AsYCR7aX1gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYyLnRleHRDb250ZW50ID0gYCR7dG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXS50b2Rvc1tpXS5kdWVEYXRlfWA7XG4gICAgICAgICAgICBkaXYyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFpbl9fdGFibGVfX2NvbHVtbi0yXCIpO1xuICAgICAgICAgICAgZGl2Mi5zZXRBdHRyaWJ1dGUoYGRhdGEtdG9kby1saXN0YCxgJHt0b2RvTGlzdE5vfWApO1xuICAgICAgICAgICAgZGl2Mi5zZXRBdHRyaWJ1dGUoYGRhdGEtdG9kb2AsYCR7aX1gKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkaXYzLnRleHRDb250ZW50ID0gYCR7dG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXS50b2Rvc1tpXS5wcmlvcml0eX1gO1xuICAgICAgICAgICAgZGl2My5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5fX3RhYmxlX19jb2x1bW4tM1wiKTtcbiAgICAgICAgICAgIGRpdjMuc2V0QXR0cmlidXRlKGBkYXRhLXRvZG8tbGlzdGAsYCR7dG9kb0xpc3ROb31gKTtcbiAgICAgICAgICAgIGRpdjMuc2V0QXR0cmlidXRlKGBkYXRhLXRvZG9gLGAke2l9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRhYmxlLmFwcGVuZENoaWxkKGxpKTsgXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYwKTtcbiAgICAgICAgICAgIGRpdjAuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoZGl2MSk7XG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChkaXYyKTtcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGRpdjMpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFibGVcIik7XG59O1xuXG4vLyByZW1vdmUgZWxlbWVudHNcbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzKGVsKSB7XG4gICAgY29uc3QgdG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcblxuICAgIHRvZG9zLmZvckVhY2goZWwgPT4ge1xuICAgIGVsLnJlbW92ZSgpO1xuICAgIH0pO1xufTtcblxuLy8gcmVmcmVzaCBtYWluIHRpdGxlXG5mdW5jdGlvbiBhZGRNYWluVGl0bGUodG9kb0xpc3RBcnJheSwgdG9kb0xpc3RObykge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX190b3BfX3RpdGxlXCIpWzBdO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXS5uYW1lfWA7XG59O1xuXG4vLyBtb2RpZnkgZGVsZXRlIGJ1dHRvbiAoc2hvdy9oaWRlLCBhZGQgZGF0YSB2YWx1ZSlcbmZ1bmN0aW9uIG1vZGlmeURlbGV0ZUJ0bih0b2RvTGlzdE5vKSB7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tYWluX19kZWxldGVcIilbMF07XG4gICAgXG4gICAgaWYgKHRvZG9MaXN0Tm8gPT0gMCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2RlbGV0ZVwiKVswXS5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1ub25lXCIpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW5fX2RlbGV0ZVwiKVswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tbGlzdFwiLGAke3RvZG9MaXN0Tm99YCk7XG4gICAgfVxuXG4gICAgZWxzZSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fZGVsZXRlXCIpWzBdLmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNwbGF5LW5vbmVcIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbl9fZGVsZXRlXCIpWzBdLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1saXN0XCIsYCR7dG9kb0xpc3ROb31gKTtcbiAgICB9O1xufTtcblxuLy8gdG9nZ2xlIHRvZG8gZmluaXNoZWQvdW5maW5pc2hlZFxuZnVuY3Rpb24gdG9nZ2xlRmluaXNoZWQodG9kb0xpc3RBcnJheSwgdG9kb0xpc3RObywgdG9kb05vKSB7XG4gICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbl9fY2hlY2tib3hcIilbdG9kb05vXTtcbiAgICBjb25zdCBtYWluVGFibGVSb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWFpbl9fdGFibGVfX3Jvd1wiKVt0b2RvTm9dO1xuXG4gICAgaWYgKHRvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbdG9kb05vXS5maW5pc2hlZCA9PSBmYWxzZSkge1xuICAgICAgICB0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zW3RvZG9Ob10uZmluaXNoZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGVsc2UgaWYgKHRvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbdG9kb05vXS5maW5pc2hlZCA9PSB0cnVlKSB7XG4gICAgICAgIHRvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbdG9kb05vXS5maW5pc2hlZCA9IGZhbHNlO1xuICAgIH07XG5cbiAgICByZWZyZXNoTWFpbih0b2RvTGlzdEFycmF5LCB0b2RvTGlzdE5vKTtcbn07XG5cbi8vIG9wZW4gdG9kbyBkZXRhaWxzIHdpbmRvd1xuZnVuY3Rpb24gb3BlbkRldGFpbHModG9kb0xpc3RBcnJheSwgdG9kb0xpc3RObywgdG9kb05vKSB7XG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWxcIilbMF07XG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImRpc3BsYXktbm9uZVwiKTtcblxuICAgIHJlZnJlc2hEZXRhaWxzKHRvZG9MaXN0QXJyYXksIHRvZG9MaXN0Tm8sIHRvZG9Obyk7XG59O1xuXG4vLyBhZGRzIGluZm8gZnJvbSB0b2RvIG9iamVjdCB0byBkZXRhaWxzIHdpbmRvd1xuZnVuY3Rpb24gcmVmcmVzaERldGFpbHModG9kb0xpc3RBcnJheSwgdG9kb0xpc3RObywgdG9kb05vKSB7XG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsX193aW5kb3dfX3RpdGxlXCIpWzBdO1xuICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbF9fd2luZG93X19kZXNjcmlwdGlvblwiKVswXTtcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtb2RhbF9fd2luZG93X19kdWUtZGF0ZVwiKVswXTtcbiAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWxfX3dpbmRvd19fcHJpb3JpdHlcIilbMF07XG4gICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsX193aW5kb3dfX25vdGVzXCIpWzBdO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zW3RvZG9Ob10udGl0bGV9YDtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3RvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3NbdG9kb05vXS5kZXNjcmlwdGlvbn1gO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHt0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zW3RvZG9Ob10uZHVlRGF0ZX1gO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7dG9kb0xpc3RBcnJheVt0b2RvTGlzdE5vXS50b2Rvc1t0b2RvTm9dLnByaW9yaXR5fWA7XG4gICAgbm90ZXMudGV4dENvbnRlbnQgPSBgJHt0b2RvTGlzdEFycmF5W3RvZG9MaXN0Tm9dLnRvZG9zW3RvZG9Ob10ubm90ZXN9YDtcbn07XG5cbi8vY2xvc2VzIGRldGFpbHMgd2luZG93XG5mdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1vZGFsXCIpWzBdO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5LW5vbmVcIik7XG59O1xuXG5leHBvcnQge1xuICAgIHJlZnJlc2hBbGwsXG4gICAgdG9nZ2xlRmluaXNoZWQsXG4gICAgb3BlbkRldGFpbHMsXG4gICAgY2xvc2VNb2RhbFxufTsiLCJpbXBvcnQgeyByZWZyZXNoQWxsLCB0b2dnbGVGaW5pc2hlZCwgb3BlbkRldGFpbHMsIGNsb3NlTW9kYWwgfSBmcm9tIFwiLi9kb21cIjtcblxuLy8gY2xhc3MgZm9yIHRvZG8tbGlzdHNcbmNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy50b2RvcyA9IFtdO1xuICAgICAgdG9kb0xpc3RBcnJheS5wdXNoKHRoaXMpOyAvLyBwdXNoIGFsbCB0aGUgaW5zdGFuY2VzIGludG8gc2FtZSBhcnJheVxuICAgIH07XG4gIH07XG5cbi8vIGNyZWF0ZSBhcnJheSBmb3IgdG9kby1saXN0IG9iamVjdHNcbmNvbnN0IHRvZG9MaXN0QXJyYXkgPSBbXTtcblxuLy8gY3JlYXRlIHRvZG8gbGlzdHNcbmNvbnN0IGRlZmF1bHRMaXN0ID0gbmV3IFRvZG9MaXN0KFwiRGVmYXVsdCBKU1wiKTtcbmNvbnN0IHNlY29uZExpc3QgPSBuZXcgVG9kb0xpc3QoXCJKUyBsaXN0IDJcIik7XG5cbi8vIGNsYXNzIGZvciB0b2RvJ3NcbmNsYXNzIFRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCB0b2RvTGlzdE5vKSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMubm90ZXMgPSBub3Rlc1xuICAgICAgICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gICAgICAgIHRvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10udG9kb3MucHVzaCh0aGlzKTtcbiAgICB9O1xufTtcblxuLy8gY3JlYXRlIHNvbWUgdG9kbyBvYmplY3RzXG5jb25zdCB0b2RvMSAgPSBuZXcgVG9kbyhcIlRpdGxlIDFcIiwgXCJEZXNjcmlwdGlvblwiLCBcIkR1ZSBkYXRlXCIsIFwiUHJpb3JpdHlcIiwgXCJOb3Rlc1wiLCAwKTtcbmNvbnN0IHRvZG8yICA9IG5ldyBUb2RvKFwiVGl0bGUgMlwiLCBcIkRlc2NyaXB0aW9uIDJcIiwgXCJEdWUgZGF0ZSAyXCIsIFwiUHJpb3JpdHkgMlwiLCBcIk5vdGVzIDJcIiwgMCk7XG5jb25zdCB0b2RvMyAgPSBuZXcgVG9kbyhcIlRpdGxlIDNcIiwgXCJEZXNjcmlwdGlvbiAzXCIsIFwiRHVlIGRhdGUgM1wiLCBcIlByaW9yaXR5IDNcIiwgXCJOb3RlcyAzXCIsIDEpO1xuXG4vLyBleGVjdXRlIHdoZW4gYnJvd3NlciBsb2Fkc1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJlZnJlc2hBbGwodG9kb0xpc3RBcnJheSwgMCk7XG59O1xuXG4vLyBleGVjdXRlIHdoZW4gdG9kbyBsaXN0IGl0ZW0gaGFzIGJlZW4gY2xpY2tlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm5hdl9fdG9kby1saXN0c1wiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5ub2RlTmFtZSA9PSBcIkxJXCIpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3RObyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tbGlzdFwiKTtcbiAgICAgICAgcmVmcmVzaEFsbCh0b2RvTGlzdEFycmF5LCB0b2RvTGlzdE5vKTtcbiAgICB9XG5cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH07XG59KTtcblxuLy8gZXhlY3V0ZSB3aGVuIGRlbGV0ZSBidXR0b24gaGFzIGJlZW4gY2xpY2tlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW5fX2RlbGV0ZVwiKVswXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3RObyA9IGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8tbGlzdFwiKTtcbiAgICBpZiAoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke3RvZG9MaXN0QXJyYXlbdG9kb0xpc3ROb10ubmFtZX1gKSkge1xuICAgICAgICB0b2RvTGlzdEFycmF5LnNwbGljZSh0b2RvTGlzdE5vKTtcbiAgICAgICAgcmVmcmVzaEFsbCh0b2RvTGlzdEFycmF5LCAwKTtcbiAgICAgICAgfTtcbn0pO1xuXG4vLyBleGVjdXRlIHdoZW4gY2hlY2tib3ggaGFzIGJlZW4gY2xpY2tlZFxuZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm1haW5fX3RhYmxlXCIpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LnZhbHVlID09IFwibWFpbl9fY2hlY2tib3hcIil7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0Tm8gPSBldmVudC50YXJnZXQuYXR0cmlidXRlc1tcImRhdGEtdG9kby1saXN0XCJdLnZhbHVlO1xuICAgICAgICBjb25zdCB0b2RvTm8gPSBldmVudC50YXJnZXQuYXR0cmlidXRlc1tcImRhdGEtdG9kb1wiXS52YWx1ZTtcblxuICAgICAgICB0b2dnbGVGaW5pc2hlZCh0b2RvTGlzdEFycmF5LCB0b2RvTGlzdE5vLCB0b2RvTm8pO1xuICAgICB9XG4gfSk7XG5cbi8vIGV4ZWN1dGUgd2hlbiB0b2RvIGhhcyBiZWVuIGNsaWNrZWRcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJtYWluX190YWJsZVwiKVswXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC52YWx1ZSA9PSBcIm1haW5fX3RhYmxlX19jb2x1bW4tMVwiKXtcbiAgICAgICAgY29uc3QgdG9kb0xpc3RObyA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS10b2RvLWxpc3RcIl0udmFsdWU7XG4gICAgICAgIGNvbnN0IHRvZG9ObyA9IGV2ZW50LnRhcmdldC5hdHRyaWJ1dGVzW1wiZGF0YS10b2RvXCJdLnZhbHVlO1xuXG4gICAgICAgIG9wZW5EZXRhaWxzKHRvZG9MaXN0QXJyYXksIHRvZG9MaXN0Tm8sIHRvZG9Obyk7XG4gICAgfVxuIH0pO1xuXG4vLyBleGVjdXRlIHdoZW4gWCBoYXMgYmVlbiBjbGlja2VkXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibW9kYWxfX3dpbmRvd19fY2xvc2VcIilbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgY2xvc2VNb2RhbCgpO1xufSk7XG5cbi8vIGV4ZWN1dGUgd2hlbiBtb2RhbCBiYWNrZ3JvdW5kIGhhcyBiZWVuIGNsaWNrZWRcbmRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21vZGFsJylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGNsb3NlTW9kYWwoKTtcbn0pO1xuXG4vLyBwcmV2ZW50IGV4ZWN1dGlvbiB3aGVuIGFueSBwYXJ0IG9mIG1vZGFsIHdpbmRvdyBoYXMgYmVlbiBjbGlja2VkXG5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtb2RhbF9fd2luZG93JylbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSk7Il0sIm5hbWVzIjpbInJlZnJlc2hBbGwiLCJ0b2RvTGlzdEFycmF5IiwidG9kb0xpc3RObyIsInBhcmVudEVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwiaSIsImxlbmd0aCIsImNoaWxkRWwiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwidGV4dENvbnRlbnQiLCJuYW1lIiwic3R5bGUiLCJmb250V2VpZ2h0IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVCdG4iLCJyZWZyZXNoTmF2IiwicmVmcmVzaE1haW4iLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJtb2RpZnlEZWxldGVCdG4iLCJ0ZXh0IiwiY2xhc3NOYW1lIiwicGFyZW50IiwiYnRuIiwicmVtb3ZlRWxlbWVudHMiLCJhZGRNYWluVGl0bGUiLCJ0b2RvcyIsImZpbmlzaGVkIiwidGFibGUiLCJsaSIsImRpdjAiLCJjaGVja2JveCIsImRpdjEiLCJ0aXRsZSIsImRpdjIiLCJkdWVEYXRlIiwiZGl2MyIsInByaW9yaXR5Iiwic29tZSIsImUiLCJnZXRFbGVtZW50QnlJZCIsImVsIiwiZm9yRWFjaCIsImNsb3NlTW9kYWwiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiVG9kb0xpc3QiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJwdXNoIiwiVG9kbyIsImRlc2NyaXB0aW9uIiwibm90ZXMiLCJ3aW5kb3ciLCJvbmxvYWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ0YXJnZXQiLCJub2RlTmFtZSIsImdldEF0dHJpYnV0ZSIsImNvbmZpcm0iLCJzcGxpY2UiLCJ2YWx1ZSIsImF0dHJpYnV0ZXMiLCJ0b2RvTm8iLCJ0b2dnbGVGaW5pc2hlZCIsInJlZnJlc2hEZXRhaWxzIiwib3BlbkRldGFpbHMiLCJzdG9wUHJvcGFnYXRpb24iXSwic291cmNlUm9vdCI6IiJ9