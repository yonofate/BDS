﻿var common = (function() {
    var serverMapPath = "",

        initPath = function (path) {
            serverMapPath = path;
        },

        mapPath = function (path) {
            var p = serverMapPath + path;
            return p.replace("//", "/");
        },
        mapPathApi = function (path) {
            var p = 'https://localhost:44325/api' + path;
            return p;//.replace("//", "/");
        },

        reload = function () {
            window.location = window.location;
        },

        redirectTo = function (url) {
            window.location = mapPath(url);
        },

        rowNumber = 0,
        resetRowNumber = function (e) {
            rowNumber = 0;
        },

        renderNumber = function (d) {
            return ++rowNumber;
        },

        errorHandler = function (e) {
            if (e.errors) {
                var message = "Errors:\n";
                $.each(e.errors, function (key, value) {
                    if ('errors' in value) {
                        $.each(value.errors, function () {
                            message += this + "\n";
                        });
                    }
                });

                toastr.error(message);
            }
        },
        raw = function (val) {
            if (val == null) return '';
            else return val;
        },
        onDataBoundHandler = function (e) {
            if ($('.pagerTop').length == 0) {
                var grid = $('#_list').data('kendoGrid');
                var wrapper = $('<div class="k-pager-wrap k-grid-pager pagerTop"/>').insertBefore(grid.element.children("table"));
                grid.pagerTop = new kendo.ui.Pager(wrapper, $.extend({}, grid.options.pageable, { dataSource: grid.dataSource }));
                grid.element.height("").find(".pagerTop").css("border-width", "0 0 1px 0");
            }
        };


    return {
        initPath: initPath,
        mapPath: mapPath,
        mapPathApi: mapPathApi,
        reload: reload,
        redirectTo: redirectTo,       
        resetRowNumber: resetRowNumber,
        renderNumber: renderNumber,
        errorHandler: errorHandler,
        onDataBoundHandler: onDataBoundHandler,
        raw: raw
    };
}())