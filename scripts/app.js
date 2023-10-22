particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 60, // Максимальное количество точек
        "density": {
          "enable": false // Отключение плотности точек
        }
      },
      "color": {
        "value": "#000" // Цвет точек
      },
      "shape": {
        "type": "circle", // Форма точек (круг)
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.7, // Прозрачность точек
        "random": false, // Отключение случайной прозрачности
        "anim": {
          "enable": false, // Отключение анимации прозрачности
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5, // Размер точек
        "random": true, // Включение случайного размера точек
        "anim": {
          "enable": false, // Отключение анимации размера точек
          "speed": 40,
          "size_min": 0.4,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true, // Включение связей между точками
        "distance": 70, // Расстояние между точками, на котором отображаются связи
        "color": "#000", // Цвет связей
        "opacity": 0.3,
        "width": 0.8
      },
      "move": {
        "enable": true, // Включение движения точек
        "speed": 1.2, // Скорость перемещения точек
        "direction": "none", // Направление движения (нет)
        "random": false, // Отключение случайного движения
        "straight": false, // Отключение прямолинейного движения
        "out_mode": "out", // Реакция на выход за пределы контейнера (исчезновение)
        "attract": {
          "enable": false, // Отключение притяжения к точке
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false // Отключение реакции на наведение
        },
        "onclick": {
          "enable": false // Отключение реакции на клик
        },
        "resize": true // Включение возможности реагировать на изменение размера окна
      }
    },
    "retina_detect": true // Включение поддержки retina-экранов
  }
);
