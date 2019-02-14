var domLibrary = {

  //1. Взимане на съществуващ DOM елемент от страницата
  getElement: function (elementId) {
    return document.getElementById(elementId);
  },

  getFullNodeList: function (input) {
    return document.querySelectorAll(input);
  },

  //2. Добавяне на не съществуващ елемент към произволен елемент, вече съществуващ на HTML страницата.

  createElement: function (tagName) {
    var newElement = document.createElement(tagName);
    var newElementContent = document.createTextNode("");
    return newElement;
  },

  createTextNode: function (data) {
    var newElementContent = document.createTextNode("");
    return newElementContent;
  }, 

  createTextNodeForDates: function (date) {
    var newElementContent = document.createTextNode(date);
    return newElementContent;
  },

  append: function(parent,child) {
    var child = newElementContent;
    var parent = newElement;
    parent.appendChild(child);
  },

  //3. Изтриване на съществуващ елемент от HTML страницата
  deleteElement: function (elementId) {
    var parentElement = document.getElementById(elementId).parentNode;
    var element = document.getElementById(elementId);
    parentElement.removeChild(element);
  },

  //4. Промяна на свойствата на избран елемент  (id/class/data/name)
  editElementAttribute: function (elementId, attributeType, attributeValue) {

    switch (attributeType) {

      case "id":
        {
          var element = document.getElementById(elementId).setAttribute("id", attributeValue);
          return element;
          break;
        }
      case "class":
        {
          var element = document.getElementById(elementId).setAttribute("class", attributeValue);
          return element;
          break;
        }
      case "data":
        {
          var element = document.getElementById(elementId).setAttribute("data", attributeValue);
          return element;
          break;
        }
      case "name":
        {
          var element = document.getElementById(elementId).setAttribute("name", attributeValue);
          return element;
          break;
        }
    }
  },

  //4. Промяна и връщане на текстово съдържание
  editText: function (elementId, newContent) {
    var element = document.getElementById(elementId);
    newContent = element.innerText;
    return newContent;
  },

  getText: function (elementId) {
    var element = document.getElementById(elementId);
    return element.innerText;
  },


  //4. Промяна и връщане на HTML съдържание на елемента
  editHTML: function (elementId, newContent) {
    var element = document.getElementById(elementId);
    newContent = element.innerHTML;
    return newContent;
  },

  getHTML: function (elementId) {
    var element = document.getElementById(elementId);
    htmlContent = element.outerHTML;
    return element;
  },

  //4. Промяна на съществуващи стилове, както и добавяне на множество стилове под формата на обект


  //5. Контрол на траверсирането спрямо селектираният елемент в това число
  getParentElement: function (elementId) {
    return document.getElementById(elementId).parentElement;
  },

  getPreviousSibling: function (elementId) {
    return document.getElementById(elementId).previousElementSibling;
  },

  getNextSibling: function (elementId) {
    return document.getElementById(elementId).nextElementSibling;
  },

  getAllChildrenElements: function (elementId) {
    return document.getElementById(elementId).children;
  },

  //6. Имплементирайте събитиен модел който да ползва вградените в системата обекти за събития.
  addEvent: function (element, event, options) {
    return document.getElementById(element).addEventListener(event, options);
  }

};