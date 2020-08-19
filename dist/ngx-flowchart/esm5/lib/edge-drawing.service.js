import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { FlowchartConstants } from './ngx-flowchart.models';
var FcEdgeDrawingService = /** @class */ (function () {
    function FcEdgeDrawingService() {
    }
    FcEdgeDrawingService.prototype.getEdgeDAttribute = function (pt1, pt2, style) {
        var dAddribute = "M " + pt1.x + ", " + pt1.y + " ";
        if (style === FlowchartConstants.curvedStyle) {
            var sourceTangent = this.computeEdgeSourceTangent(pt1, pt2);
            var destinationTangent = this.computeEdgeDestinationTangent(pt1, pt2);
            dAddribute += "C " + sourceTangent.x + ", " + sourceTangent.y + " " + (destinationTangent.x - 50) + ", " + destinationTangent.y + " " + pt2.x + ", " + pt2.y;
        }
        else {
            dAddribute += "L " + pt2.x + ", " + pt2.y;
        }
        return dAddribute;
    };
    FcEdgeDrawingService.prototype.getEdgeCenter = function (pt1, pt2) {
        return {
            x: (pt1.x + pt2.x) / 2,
            y: (pt1.y + pt2.y) / 2
        };
    };
    FcEdgeDrawingService.prototype.computeEdgeTangentOffset = function (pt1, pt2) {
        return (pt2.y - pt1.y) / 2;
    };
    FcEdgeDrawingService.prototype.computeEdgeSourceTangent = function (pt1, pt2) {
        return {
            x: pt1.x,
            y: pt1.y + this.computeEdgeTangentOffset(pt1, pt2)
        };
    };
    FcEdgeDrawingService.prototype.computeEdgeDestinationTangent = function (pt1, pt2) {
        return {
            x: pt2.x,
            y: pt2.y - this.computeEdgeTangentOffset(pt1, pt2)
        };
    };
    FcEdgeDrawingService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], FcEdgeDrawingService);
    return FcEdgeDrawingService;
}());
export { FcEdgeDrawingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRnZS1kcmF3aW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZmxvd2NoYXJ0LyIsInNvdXJjZXMiOlsibGliL2VkZ2UtZHJhd2luZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBWSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3RFO0lBRUU7SUFDQSxDQUFDO0lBRU0sZ0RBQWlCLEdBQXhCLFVBQXlCLEdBQWEsRUFBRSxHQUFhLEVBQUUsS0FBYTtRQUNsRSxJQUFJLFVBQVUsR0FBRyxPQUFLLEdBQUcsQ0FBQyxDQUFDLFVBQUssR0FBRyxDQUFDLENBQUMsTUFBRyxDQUFDO1FBQ3pDLElBQUksS0FBSyxLQUFLLGtCQUFrQixDQUFDLFdBQVcsRUFBRTtZQUM1QyxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzlELElBQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLDZCQUE2QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN4RSxVQUFVLElBQUksT0FBSyxhQUFhLENBQUMsQ0FBQyxVQUFLLGFBQWEsQ0FBQyxDQUFDLFNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQUssa0JBQWtCLENBQUMsQ0FBQyxTQUFJLEdBQUcsQ0FBQyxDQUFDLFVBQUssR0FBRyxDQUFDLENBQUcsQ0FBQztTQUNySTthQUFNO1lBQ0wsVUFBVSxJQUFJLE9BQUssR0FBRyxDQUFDLENBQUMsVUFBSyxHQUFHLENBQUMsQ0FBRyxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVNLDRDQUFhLEdBQXBCLFVBQXFCLEdBQWEsRUFBRSxHQUFhO1FBQy9DLE9BQU87WUFDTCxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3RCLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7U0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFTyx1REFBd0IsR0FBaEMsVUFBaUMsR0FBYSxFQUFFLEdBQWE7UUFDM0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sdURBQXdCLEdBQWhDLFVBQWlDLEdBQWEsRUFBRSxHQUFhO1FBQzNELE9BQU87WUFDTCxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDUixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztTQUNuRCxDQUFDO0lBQ0osQ0FBQztJQUVPLDREQUE2QixHQUFyQyxVQUFzQyxHQUFhLEVBQUUsR0FBYTtRQUNoRSxPQUFPO1lBQ0wsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ1IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDbkQsQ0FBQztJQUNKLENBQUM7SUF4Q1Usb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTs7T0FDQSxvQkFBb0IsQ0EwQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTFDRCxJQTBDQztTQTFDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGY0Nvb3JkcywgRmxvd2NoYXJ0Q29uc3RhbnRzIH0gZnJvbSAnLi9uZ3gtZmxvd2NoYXJ0Lm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGY0VkZ2VEcmF3aW5nU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWRnZURBdHRyaWJ1dGUocHQxOiBGY0Nvb3JkcywgcHQyOiBGY0Nvb3Jkcywgc3R5bGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IGRBZGRyaWJ1dGUgPSBgTSAke3B0MS54fSwgJHtwdDEueX0gYDtcbiAgICBpZiAoc3R5bGUgPT09IEZsb3djaGFydENvbnN0YW50cy5jdXJ2ZWRTdHlsZSkge1xuICAgICAgY29uc3Qgc291cmNlVGFuZ2VudCA9IHRoaXMuY29tcHV0ZUVkZ2VTb3VyY2VUYW5nZW50KHB0MSwgcHQyKTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uVGFuZ2VudCA9IHRoaXMuY29tcHV0ZUVkZ2VEZXN0aW5hdGlvblRhbmdlbnQocHQxLCBwdDIpO1xuICAgICAgZEFkZHJpYnV0ZSArPSBgQyAke3NvdXJjZVRhbmdlbnQueH0sICR7c291cmNlVGFuZ2VudC55fSAkeyhkZXN0aW5hdGlvblRhbmdlbnQueCAtIDUwKX0sICR7ZGVzdGluYXRpb25UYW5nZW50Lnl9ICR7cHQyLnh9LCAke3B0Mi55fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRBZGRyaWJ1dGUgKz0gYEwgJHtwdDIueH0sICR7cHQyLnl9YDtcbiAgICB9XG4gICAgcmV0dXJuIGRBZGRyaWJ1dGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0RWRnZUNlbnRlcihwdDE6IEZjQ29vcmRzLCBwdDI6IEZjQ29vcmRzKTogRmNDb29yZHMge1xuICAgIHJldHVybiB7XG4gICAgICB4OiAocHQxLnggKyBwdDIueCkgLyAyLFxuICAgICAgeTogKHB0MS55ICsgcHQyLnkpIC8gMlxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGNvbXB1dGVFZGdlVGFuZ2VudE9mZnNldChwdDE6IEZjQ29vcmRzLCBwdDI6IEZjQ29vcmRzKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHB0Mi55IC0gcHQxLnkpIC8gMjtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZUVkZ2VTb3VyY2VUYW5nZW50KHB0MTogRmNDb29yZHMsIHB0MjogRmNDb29yZHMpOiBGY0Nvb3JkcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHB0MS54LFxuICAgICAgeTogcHQxLnkgKyB0aGlzLmNvbXB1dGVFZGdlVGFuZ2VudE9mZnNldChwdDEsIHB0MilcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlRWRnZURlc3RpbmF0aW9uVGFuZ2VudChwdDE6IEZjQ29vcmRzLCBwdDI6IEZjQ29vcmRzKTogRmNDb29yZHMge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBwdDIueCxcbiAgICAgIHk6IHB0Mi55IC0gdGhpcy5jb21wdXRlRWRnZVRhbmdlbnRPZmZzZXQocHQxLCBwdDIpXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=