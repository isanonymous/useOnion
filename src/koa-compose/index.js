'use strict'
/** "version": "4.1.0", */
/**
 * Expose compositor.
 */

// module.exports = compose

/**
 * Compose `middleware` returning
 * a fully valid middleware comprised
 * of all those which are passed.
 *
 * @param {Array} middleware
 * @param {boolean=true} async
 * @return {Function}
 * @api public
 */

export default function compose (middleware, async=true) {
  if (!Array.isArray(middleware)) throw new TypeError('Middleware stack must be an array!')
  for (const fn of middleware) {
    if (typeof fn !== 'function') throw new TypeError('Middleware must be composed of functions!')
  }

  /**
   * @param {Object} context
   * @return {Promise}
   * @api public
   */

  return function (context, next) {
    // last called middleware #
    let index = -1
    return dispatch(0)
    function dispatch (i) {
      if (i <= index) {
        let error = new Error('next() called multiple times');
        return async ? Promise.reject(error) : error
      }
      index = i
      let fn = middleware[i]
      if (i === middleware.length) fn = next
      if (!fn) return async ? Promise.resolve() : undefined
      try {
        let value = fn(context, dispatch.bind(null, i + 1));
        return async ? Promise.resolve(value) : value
      } catch (err) {
        return async ? Promise.reject(err) : err
      }
    }
  }
}
