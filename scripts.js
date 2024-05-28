document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    const typewriterElement = document.getElementById('typewriter');
    const typewriterText = "Pruthvi Patel";

    let i = 0;

    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML += typewriterText.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Function to toggle leadership card details
    window.toggleDetails = (card) => {
        const details = card.querySelector('.details');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    };

    // Interactive stacked bar charts for experience sections
    const createStackedBarChart = (id, data) => {
        const ctx = document.getElementById(id);
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Skills and Achievements'
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    // Data for stacked bar charts
    const advisorChartData = {
        labels: ['Year 1', 'Year 2', 'Year 3'],
        datasets: [
            {
                label: 'Skills Learned',
                data: [5, 10, 15],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
                label: 'Achievements',
                data: [2, 5, 8],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }
        ]
    };

    const nsquairChartData = {
        labels: ['May', 'June', 'July'],
        datasets: [
            {
                label: 'Skills Learned',
                data: [3, 7, 5],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
                label: 'Achievements',
                data: [1, 4, 6],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }
        ]
    };

    const ucHelpDeskChartData = {
        labels: ['Week 1', 'Week 2', 'Week 3'],
        datasets: [
            {
                label: 'Skills Learned',
                data: [4, 6, 10],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
                label: 'Achievements',
                data: [2, 4, 7],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }
        ]
    };

    const plastoFabChartData = {
        labels: ['August', 'September', 'October', 'November'],
        datasets: [
            {
                label: 'Skills Learned',
                data: [6, 8, 12, 14],
                backgroundColor: 'rgba(54, 162, 235, 0.7)',
            },
            {
                label: 'Achievements',
                data: [3, 5, 9, 11],
                backgroundColor: 'rgba(75, 192, 192, 0.7)',
            }
        ]
    };

    // Create stacked bar charts
    createStackedBarChart('advisorChart', advisorChartData);
    createStackedBarChart('nsquairChart', nsquairChartData);
    createStackedBarChart('ucHelpDeskChart', ucHelpDeskChartData);
    createStackedBarChart('plastoFabChart', plastoFabChartData);

    // Interactive chart for academic projects
    const createProjectChart = (id, data) => {
        const ctx = document.getElementById(id);
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: 'bar',
                data: data,
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Project Phases'
                        }
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true,
                            beginAtZero: true
                        }
                    }
                }
            });
        }
    };

    // Data for project charts
    const nexusChartData = {
        labels: ['Planning', 'Development', 'Testing'],
        datasets: [
            {
                label: 'Nexus Project',
                data: [30, 50, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(75, 192, 192, 0.7)'
                ],
            }
        ]
    };

    const savorChartData = {
        labels: ['UI Design', 'Backend Development', 'User Testing'],
        datasets: [
            {
                label: 'Savor Project',
                data: [25, 50, 25],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
            }
        ]
    };

    const memrepoChartData = {
        labels: ['Feature Design', 'Development', 'Testing'],
        datasets: [
            {
                label: 'Memrepo Project',
                data: [40, 40, 20],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)'
                ],
            }
        ]
    };

    // Create project chartss
    createProjectChart('nexusChart', nexusChartData);
    createProjectChart('savorChart', savorChartData);
    createProjectChart('memrepoChart', memrepoChartData);
});
