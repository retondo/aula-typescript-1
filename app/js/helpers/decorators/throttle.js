export function throttle(milissegundos = 500) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        let timer = 0;
        descriptor.value = function (...args) {
            clearInterval(timer);
            timer = setTimeout(() => {
                metodoOriginal.apply(this, args);
            }, milissegundos);
        };
        return descriptor;
    };
}
