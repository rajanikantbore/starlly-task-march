const configObj = {
    chart: {
        type: 'bar',
    },
    title: {
        text: 'Camera Analysis',
        align: 'left',
        x: 0
    },
    xAxis: {
        max: 9,
        categories: ['John Doe', 'Mark Doe', 'Perry Doe', 'Denver Doe', 'Oliver Doe', 'Berry Doe', 'Arthur Doe', 'Drake Doe', 'Mike Doe', 'Harvey Doe',]
    },
    yAxis: {
        min: 0,
        max: 21,
        categories: [ '9 AM', '9.30 AM','10 AM','1030 AM','11 AM','11.30 AM','12 PM','12.30 PM','1 PM','1.30 PM','2 PM','2.30 PM','3 PM','3.30 PM','4 PM','4.30 PM','5 PM','5.30 PM','6 PM','6.30 PM','7 PM','7.30 PM']
    },    

    yAxis: {
        title: {
            text: null
        }
    },
    legend: {
        reversed: false
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        bar: {
          showInLegend: false,
        },
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'John Doe',
        data: [5, 3, 4, 7, 2,2,3]
    }, {
        name: 'Mark Doe',
        data: [2, 2, 3, 2, 1,3,4,6]
    }, {
        name: 'Perry Doe',
        data: [3, 4, 4, 2, 5, 4, 2]
    }, {
        name: 'Denver Doe',
        data: [2, 5, 4, 3, 2,3,2,4,2,4,3]
    }, {
        name: 'Mike Doe',
        data: [3, 2, 5, 4, 2,4,2,3,4]
    }  ]
};

export default configObj;