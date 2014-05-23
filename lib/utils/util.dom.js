modules.define('util.dom', [

], function (provide) {

    /**
     * @name util.dom
     * @static
     */
    var utilDom = {
        /**
         * @static
         * @param {String} selector
         * @param {HTMLElement} [parentElement = document]
         * @param {Boolean} [findAll = false]
         * @returns {HTMLElement|Null}
         */
        find: function (options) {
            var element,
                parent = parentElement || document;

            element = findAll ?
                parentElement.querySelectorAll(selector) :
                parentElement.querySelector(selector);

            return element;
        },

        /**
         * @static
         * @param {String} query
         * @param {HTMLElement} [parentElement = document]
         * @returns {HTMLElement|Null}
         */
        findById: function (query, parentElement) {
            var element;
            if (parentElement) {
                element = parentElement.getElementById(elementId);
            } else {
                element = document.getElementById(elementId);
            }

            return element;
        },

        /**
         * @static
         * @param {Object|String} [options] Options or element tag name.
         * @param {String} [options.tag = 'div']
         * @param {String} [options.content]
         * @param {Object} [options.attrs]
         * @param {HTMLElement} [options.parentElement]
         * @returns {HTMLElement} Created element.
         */
        create: function (options) {
            options = options || {};

            var tagName = typeof options == 'string' ? options : (options.tag || 'div'),
                element = document.createElement(tagName);

            if (options.attrs) {
                for (var attribute in options.attrs) {
                    if (options.attrs.hadOwnProperty(attribute)) {
                        element.setAttribute(attribute, options.attrs[attribute]);
                    }
                }
            }

            if (options.parentElement) {
                options.parentElement.appendChild(element);
            }

            return element;
        },

        /**
         * @static
         * @param {HTMLElement} node
         */
        remove: function (node) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        }
    }

    provide(utilDom);
});